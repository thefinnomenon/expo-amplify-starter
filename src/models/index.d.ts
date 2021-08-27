import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PushTokenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PushToken {
  readonly id: string;
  readonly token: string;
  readonly type: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PushToken, PushTokenMetaData>);
  static copyOf(source: PushToken, mutator: (draft: MutableModel<PushToken, PushTokenMetaData>) => MutableModel<PushToken, PushTokenMetaData> | void): PushToken;
}