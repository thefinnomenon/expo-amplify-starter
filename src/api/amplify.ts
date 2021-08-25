/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  username: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  username: string,
  pushTokens?: ModelPushTokenConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPushTokenConnection = {
  __typename: "ModelPushTokenConnection",
  items?:  Array<PushToken | null > | null,
  nextToken?: string | null,
};

export type PushToken = {
  __typename: "PushToken",
  id: string,
  userID: string,
  type: string,
  token: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePushTokenInput = {
  id?: string | null,
  userID: string,
  type: string,
  token: string,
};

export type ModelPushTokenConditionInput = {
  userID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPushTokenConditionInput | null > | null,
  or?: Array< ModelPushTokenConditionInput | null > | null,
  not?: ModelPushTokenConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePushTokenInput = {
  id: string,
  userID?: string | null,
  type?: string | null,
  token?: string | null,
};

export type DeletePushTokenInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelPushTokenFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPushTokenFilterInput | null > | null,
  or?: Array< ModelPushTokenFilterInput | null > | null,
  not?: ModelPushTokenFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePushTokenMutationVariables = {
  input: CreatePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type CreatePushTokenMutation = {
  createPushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePushTokenMutationVariables = {
  input: UpdatePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type UpdatePushTokenMutation = {
  updatePushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePushTokenMutationVariables = {
  input: DeletePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type DeletePushTokenMutation = {
  deletePushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      pushTokens?:  {
        __typename: "ModelPushTokenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPushTokenQueryVariables = {
  id: string,
};

export type GetPushTokenQuery = {
  getPushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPushTokensQueryVariables = {
  filter?: ModelPushTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPushTokensQuery = {
  listPushTokens?:  {
    __typename: "ModelPushTokenConnection",
    items?:  Array< {
      __typename: "PushToken",
      id: string,
      userID: string,
      type: string,
      token: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    pushTokens?:  {
      __typename: "ModelPushTokenConnection",
      items?:  Array< {
        __typename: "PushToken",
        id: string,
        userID: string,
        type: string,
        token: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePushTokenSubscription = {
  onCreatePushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePushTokenSubscription = {
  onUpdatePushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePushTokenSubscription = {
  onDeletePushToken?:  {
    __typename: "PushToken",
    id: string,
    userID: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
