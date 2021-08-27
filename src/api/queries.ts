/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPushToken = /* GraphQL */ `
  query GetPushToken($token: String!) {
    getPushToken(token: $token) {
      token
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPushTokens = /* GraphQL */ `
  query ListPushTokens(
    $token: String
    $filter: ModelPushTokenFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPushTokens(
      token: $token
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        token
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPushTokens = /* GraphQL */ `
  query SyncPushTokens(
    $filter: ModelPushTokenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPushTokens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        token
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
