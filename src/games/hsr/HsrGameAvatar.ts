import { IMetadataEntity } from "@game/common/IEntity";
import { HsrItem, HsrItemCost, HsrSkillLevel } from "./HsrItem";
import type { HsrAvatarExRank } from "./HsrAvatarExRank";

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
  icon: string;
  roundIcon: string;
  [key: string]: any;
}

export interface HsrGameServant extends HsrGameServantSimple , HsrGameAvatarEnhanceableInfo {
  taunt: number;
}

export interface HsrGameAvatar extends HsrGameAvatarSimple { 
  versions: HsrGameAvatarEnhanceableInfo[];

  /** 奇缘星魂：独立于普通六阶星魂 */
  exRanks?: HsrAvatarExRank[];

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
  /** 技能关联的角色 ID，用于头像展示；包含阿哈和德谬歌的技能 */
  avatarId?: number;
  /** 技能可用角色列表，目前只有姬子启行助战技有。 */
  linkToAvatarIds?: number[];
  linkToAvatarIdsSimplified?: number[];

  /** 削韧值 */
  toughness?: number;

  /** 战技点消耗 */
  bpCost?: number;
  /** 终结技能量消耗 */
  spCost?: number;
  /** 欢愉技能“参演编号” （速度）*/
  elationPriority?: number;
  /** 源技能表的奇缘星魂 ID */
  relatedExRankIds?: number[];
}

export interface HsrAvatarSkillLevel extends HsrSkillLevel {
  simpleParams: number[];
}

/** 系列技能：目前只有阿哈有 */
export interface HsrAvatarSeriesSkill extends HsrAvatarSkill {
  avatarId: number;
  levels: HsrAvatarSeriesSkillLevel[];
  framePrefab: string;
  specialTagPrefab: string;
  relatedAvatarIds: number[];
}

export interface HsrAvatarSeriesSkillLevel extends HsrAvatarSkillLevel {
  /** 系列等级解锁条件，不是普通技能材料升级条件。 */
  unlockCondition: { type: string; param: string };
  specialTag?: string;
}

export interface HsrAvatarRank extends IMetadataEntity<number> {
  rank: number;
  picture: string;
  desc?: string;
  params: number[];
}

export interface HsrAvatarSkillTree extends IMetadataEntity<number> {
  /** 1加成，2技能，3额外能力，4忆灵技，5特殊 */
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
  maxSp?: number;
  skills: HsrAvatarSkill[];
  seriesSkills?: HsrAvatarSeriesSkill[];
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
