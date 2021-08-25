/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPushToken = /* GraphQL */ `
  mutation CreatePushToken(
    $input: CreatePushTokenInput!
    $condition: ModelPushTokenConditionInput
  ) {
    createPushToken(input: $input, condition: $condition) {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
export const updatePushToken = /* GraphQL */ `
  mutation UpdatePushToken(
    $input: UpdatePushTokenInput!
    $condition: ModelPushTokenConditionInput
  ) {
    updatePushToken(input: $input, condition: $condition) {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
export const deletePushToken = /* GraphQL */ `
  mutation DeletePushToken(
    $input: DeletePushTokenInput!
    $condition: ModelPushTokenConditionInput
  ) {
    deletePushToken(input: $input, condition: $condition) {
      id
      userID
      type
      token
      createdAt
      updatedAt
    }
  }
`;
