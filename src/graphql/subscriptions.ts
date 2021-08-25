/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePushToken = /* GraphQL */ `
  subscription OnCreatePushToken {
    onCreatePushToken {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePushToken = /* GraphQL */ `
  subscription OnUpdatePushToken {
    onUpdatePushToken {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePushToken = /* GraphQL */ `
  subscription OnDeletePushToken {
    onDeletePushToken {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
