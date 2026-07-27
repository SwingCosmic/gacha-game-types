import { IMetadataEntity } from "@game/common/IEntity";


export interface HsrNounDesc extends IMetadataEntity<number> {
  type: number;
  sort: number;
  desc: string;
  relatedIds: number[];
  changes: {
    id: number;
    name: string;
    desc: string;
  }[];
}
