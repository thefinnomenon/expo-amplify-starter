module.exports = {
  query: `query listPushTokens {
            listPushTokens {
              items {
                token
                type
              }
            }
          }`,
};
