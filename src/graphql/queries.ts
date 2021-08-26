/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPushToken = /* GraphQL */ `
  query GetPushToken($id: ID!) {
    getPushToken(id: $id) {
      id
      type
      token
      createdAt
      updatedAt
      owner
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
        type
        token
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
