import { IMetadataEntity } from "@game/common/IEntity";

export interface HsrItem extends IMetadataEntity<number> { 
  icon: string;
  rarity: number;
}

export interface HsrSkillLevel {
  level: number;
  params: number[];
}

export type HsrDictItem<T extends IMetadataEntity = IMetadataEntity, N extends string = "name"> = T & {
  [K in N as `${K}${string}`]: string | undefined;
}

export interface HsrItemCost {
  itemId: number;
  num: number;
}
export interface HsrItemConfig extends HsrItem {
  desc: string;
  text: string;
  type: string,
  subType: string,
  inventoryGroup: number,
  itemGroup: number,
  purposeType?: number,
  pileLimit: number,
  [key: string]: any;
}

export interface HsrProperty extends IMetadataEntity<string> {
  visible: boolean;
  order?: number;
  group?: number;
  isPercent: boolean;
}
