/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable new-cap */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Expo } = require('expo-server-sdk');
const https = require('https');
const AWS = require('aws-sdk');
const urlParse = require('url').URL;

const appsyncUrl = process.env.API_EXPOAMPLIFYSTARTER_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require('./query.js').query;

const apiKey = process.env.API_EXPOAMPLIFYSTARTER_GRAPHQLAPIKEYOUTPUT;

// Create a new Expo SDK client
// optionally providing an access token if you have enabled push security
const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

exports.handler = async event => {
  const req = new AWS.HttpRequest(appsyncUrl, region);

  req.method = 'POST';
  req.path = '/graphql';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query: graphqlQuery,
    operationName: 'listPushTokens',
  });

  if (apiKey) {
    req.headers['x-api-key'] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, 'appsync', true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const res = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, result => {
      let data = '';

      result.on('data', chunk => {
        data += chunk;
      });

      result.on('end', () => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  const pushTokenObjs = res.data.listPushTokens.items;

  // Create the messages that you want to send to clients
  const messages = [];
  for (const pushTokenObj of pushTokenObjs) {
    const pushToken = pushTokenObj.token;
    // Check that all your push tokens appear to be valid Expo push tokens
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} is not a valid Expo push token`);
      continue;
    }

    // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
    messages.push({
      to: pushToken,
      sound: 'default',
      body: 'This is a test notification',
      data: { withSome: 'data' },
    });
  }

  // The Expo push notification service accepts batches of notifications so
  // that you don't need to send 1000 requests to send 1000 notifications. We
  // recommend you batch your notifications to reduce the number of requests
  // and to compress them (notifications with similar content will get
  // compressed).
  const chunks = expo.chunkPushNotifications(messages);
  const tickets = [];
  (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (const chunk of chunks) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
      } catch (error) {
        console.error(error);
      }
    }
  })();

  return {
    statusCode: 200,
    body: res,
  };
};
