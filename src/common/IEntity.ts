export interface IEntity<K = string> {
  id: K;
}

export interface IMetadataEntity<K = string> extends IEntity<K> {
  code?: string;
  name: string;
  icon?: string;
}
