/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      pushTokens {
        items {
          id
          userID
          type
          token
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        pushTokens {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPushToken = /* GraphQL */ `
  query GetPushToken($id: ID!) {
    getPushToken(id: $id) {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
export const listPushTokens = /* GraphQL */ `
  query ListPushTokens(
    $filter: ModelPushTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPushTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        type
        token
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
