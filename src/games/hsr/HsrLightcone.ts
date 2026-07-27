import { IMetadataEntity } from "@game/common/IEntity";
import { HsrItem, HsrSkillLevel } from "./HsrItem";
import { HsrAvatarPromotion, HsrAvatarSkillLevel } from "./HsrGameAvatar";

export interface HsrLightconeSimple extends HsrItem {
  path: string;
  /** 角色列表图标 */
  icon: string;
  /** 立绘 */
  portrait: string;

  [key: string]: any;
}


export interface HsrLightcone extends HsrLightconeSimple { 
  skill: HsrLightconeSkill;
  promotions: HsrAvatarPromotion[];
}


export interface HsrLightconeSkill extends IMetadataEntity<number> {
  maxLevel: number;
  desc: string;
 
  levels: HsrSkillLevel[];
}