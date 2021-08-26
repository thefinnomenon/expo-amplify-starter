/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePushTokenInput = {
  id?: string | null,
  type: string,
  token: string,
};

export type ModelPushTokenConditionInput = {
  type?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPushTokenConditionInput | null > | null,
  or?: Array< ModelPushTokenConditionInput | null > | null,
  not?: ModelPushTokenConditionInput | null,
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

export type PushToken = {
  __typename: "PushToken",
  id: string,
  type: string,
  token: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePushTokenInput = {
  id: string,
  type?: string | null,
  token?: string | null,
};

export type DeletePushTokenInput = {
  id: string,
};

export type ModelPushTokenFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPushTokenFilterInput | null > | null,
  or?: Array< ModelPushTokenFilterInput | null > | null,
  not?: ModelPushTokenFilterInput | null,
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

export type ModelPushTokenConnection = {
  __typename: "ModelPushTokenConnection",
  items?:  Array<PushToken | null > | null,
  nextToken?: string | null,
};

export type CreatePushTokenMutationVariables = {
  input: CreatePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type CreatePushTokenMutation = {
  createPushToken?:  {
    __typename: "PushToken",
    id: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPushTokenQueryVariables = {
  id: string,
};

export type GetPushTokenQuery = {
  getPushToken?:  {
    __typename: "PushToken",
    id: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      type: string,
      token: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePushTokenSubscriptionVariables = {
  owner: string,
};

export type OnCreatePushTokenSubscription = {
  onCreatePushToken?:  {
    __typename: "PushToken",
    id: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePushTokenSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePushTokenSubscription = {
  onUpdatePushToken?:  {
    __typename: "PushToken",
    id: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePushTokenSubscriptionVariables = {
  owner: string,
};

export type OnDeletePushTokenSubscription = {
  onDeletePushToken?:  {
    __typename: "PushToken",
    id: string,
    type: string,
    token: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
