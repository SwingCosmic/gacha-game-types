import { IMetadataEntity } from "@game/common/IEntity";
import { HsrDictItem, HsrItem, HsrItemCost } from "./HsrItem";

export interface HsrRelicType extends IMetadataEntity<string> {
  icon: string;
  validPropertyList: string[];
}

export interface HsrRelicInfo extends IMetadataEntity<string> {
  type: string;
  desc: string;
  storyTitle: string;
  storyContent: string;
}

export interface HsrRelicSetBonus {
  requireNum: number;
  desc: string;
  properties: {
    type: string;
    value: number | null;
  }[];
  abilityName: string;
  params: number[];
}

export interface HsrRelicSet extends HsrItem {
  isPlanarSuit: boolean;
  setSkillList: number[];
  displayItemId: number;
  displayItemIdRarity4: number;
  release: boolean;
  releaseVersion: string;
  relics: HsrRelicInfo[];
  bonuses?: HsrRelicSetBonus[];
}

export interface HsrRelic extends HsrItem {
  setId: number;
  type: string;
  mainAffixGroup: number;
  subAffixGroup: number;
  maxLevel: number;
  expType: number;
  expProvide: number;
  coinCost: number;
  mode: string;
  desc: string;
  text: string;
  storyTitle: string;
  storyContent: string;
}

export type HsrRelicTypeDict = HsrDictItem<HsrRelicType>;
