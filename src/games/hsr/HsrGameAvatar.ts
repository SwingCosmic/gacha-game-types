import { IMetadataEntity } from "@game/common/IEntity";
import { HsrItem, HsrItemCost, HsrSkillLevel } from "./HsrItem";

export interface HsrAvatarView  {
  /** 角色列表图标 */
  icon: string;
  /** 角色头像图标 */
  roundIcon: string;
  /** 立绘 */
  portrait: string;
}

export interface HsrGameAvatarSimple extends HsrAvatarView, HsrItem {
  path: string;
  element: string;

  desc: string;

  isCollaboration: boolean;
  isSpecialSp: boolean;

  [key: string]: any;
}

export interface HsrGameServantSimple extends IMetadataEntity<number> {
  /** 角色列表图标 */
  icon: string;
  /** 角色头像图标 */
  roundIcon: string;
  [key: string]: any;
}

export interface HsrGameServant extends HsrGameServantSimple , HsrGameAvatarEnhanceableInfo {
  taunt: number;
}

export interface HsrGameAvatar extends HsrGameAvatarSimple { 
  versions: HsrGameAvatarEnhanceableInfo[];

  promotions: HsrAvatarPromotion[];
  skins: HsrGameAvatarSkin[];
}

export interface HsrAvatarSkill extends IMetadataEntity<number> {
  /** 技能种类（战技、终结技等） */
  type: string;
  typeText?: string;
  /** 技能效果（群攻、强化等） */
  effect: string;
  effectText?: string;
  maxLevel: number;
  desc: string;
  simpleDesc?: string;
  levels: HsrAvatarSkillLevel[];

  /** 仅德谬歌的专属技能有 */
  picture?: string;

  /** 削韧值 */
  toughness?: number;

  /** 战技点消耗 */
  bpCost?: number;
  /** 终结技能量消耗 */
  spCost?: number;
  /** 欢愉技能“参演编号” （速度）*/
  elationPriority?: number;
}

export interface HsrAvatarSkillLevel extends HsrSkillLevel {
  simpleParams: number[];
}

export interface HsrAvatarRank extends IMetadataEntity<number> {
  rank: number;
  picture: string;
  desc?: string;
  params: number[];
}

export interface HsrAvatarSkillTree extends IMetadataEntity<number> {
  /** 1加成，2技能，3额外能力，4忆灵技，5特殊 5目前只有记忆主有 */
  pointType: number;
  anchorType: string;
  maxLevel: number;
  desc: string;

  defaultUnlock: boolean;
  skillIds: number[];
  prePoints: number[];
  promotionLimit?: number;
  levelLimit?: number;
  cost: HsrItemCost[];
  /** 官方推荐的升级顺序 */
  priority?: number;
  trigger: string;

  levels: HsrSkillLevel[];

  statusAdds: Record<string, number>;
}

export interface HsrGameAvatarEnhanceableInfo {
  /** 角色ID或者加强ID */
  id: number;
  isEnhanced: boolean;
  maxSp: number;
  skills: HsrAvatarSkill[];
  ranks: HsrAvatarRank[];
  skillTrees: HsrAvatarSkillTree[];
}



export interface PromotionData {
  base: number;
  step: number;
}


export type Promotion = {
  [K: string]: PromotionData;
}

export interface HsrAvatarPromotion {
  promotion: number;
  maxLevel: number;
  worldLevel?: number;
  properties: Promotion;
  cost: HsrItemCost[];
}

export interface HsrGameAvatarSkin extends HsrAvatarView, HsrItem {
  type: string;
}