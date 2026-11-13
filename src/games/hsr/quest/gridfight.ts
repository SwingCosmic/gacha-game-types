import { IEntity, IMetadataEntity } from "@game/common/IEntity";
import {
  HsrAvatarRank,
  HsrAvatarSkill,
  HsrGameAvatarSimple,
} from "../HsrGameAvatar";

/** 两个原始属性表合并后的字典条目（gridfight/properties.json）。 */
export interface HsrGridFightPropertyMetadata extends IMetadataEntity<string> {
  isPercent: boolean;
  miniIcon?: string;
  panelName?: string;
  visible: boolean;
  order: number;
}

/** 货币战争棋子列表快照。对齐 HsrGameAvatarSimple，增补玩法字段，不含晋阶 / 皮肤 / 行迹。 */
export interface HsrGridFightRoleSimple extends HsrGameAvatarSimple {
  /** 对应常规角色 ID。费用变体（如银狼 LV.999 的 3/4/5 费）与本体共用此值 */
  avatarId: number;
  /** 费用 */
  cost: number;
  /** 前台 / 后台 / 前后台。未标注为前后台均可 */
  frontBackType: "Both" | "Front" | "Back";
  traitIds: number[];
  chargeTypes: string[];
  /** 技能定位（输出 / 治疗 / 护盾 / 辅助） */
  skillTag?: string;
  /** 技能总览标签 */
  displayTags?: string[];
  specialAvatarId?: number;
  isInPool?: boolean;
  isInBook?: boolean;
  isExpert?: boolean;
  seasonId?: number;
  /** 角色索引中非默认赛季版本的详情路径，相对于 gridfight/。 */
  detailPath?: string;
  maxStar?: number;
  /** 列表快照不含 skills / backSkills */
  stars?: Omit<HsrGridFightRoleStar, "skills" | "backSkills">[];
}

/** 货币战争技能（已相对常规技能完成替换）。 */
export interface HsrGridFightSkill extends HsrAvatarSkill {
  triggerKey?: string;
  /** 相对常规技能有改写，标注“改” */
  isModified?: boolean;
  /** 玩法新增技能，标注“新” */
  isNew?: boolean;
  /** 被替换的常规技能 ID */
  overrideSrc?: number;
  /** 后台行动条件句 */
  conditionDesc?: string;
}

export interface HsrGridFightProperty {
  type: string;
  value?: number;
}

export interface HsrGridFightRoleStar {
  star: number;
  maxSp?: number;
  extraInitSP?: number;
  frontPower?: number;
  backPower?: number;
  luckChance?: number;
  luckDamage?: number;
  extraHealBase?: number;
  extraShieldBase?: number;
  backMaxSP?: number;
  backInitialSP?: number;
  backEnergyBar?: number;
  frontOneWordDesc?: string;
  backOneWordDesc?: string;
  properties?: HsrGridFightProperty[];
  /** 前台展示技能 */
  skills: HsrGridFightSkill[];
  /** 后台展示技能 */
  backSkills: HsrGridFightSkill[];
}

export interface HsrGridFightRecommendEquip {
  frontBackType: "Front" | "Back";
  first: number[];
  second: number[];
}

export interface HsrGridFightRank extends HsrAvatarRank {
  ownerProperties?: HsrGridFightProperty[];
  allMemberProperties?: HsrGridFightProperty[];
  modifySkillIds?: number[];
}

/** 棋子明细。无行迹 / 晋阶 / 皮肤 / 加强版本。 */
export interface HsrGridFightRole extends HsrGridFightRoleSimple {
  ranks: HsrGridFightRank[];
  stars: HsrGridFightRoleStar[];
  recommendEquips?: HsrGridFightRecommendEquip[];
}

export interface HsrGridFightEquipTag {
  id: number;
  name: string;
}

export interface HsrGridFightCraft {
  id: number;
  costIds: number[];
  seasonId?: number;
}

/** 装备 / 星徽 / 羁绊专武。 */
export interface HsrGridFightEquip extends IMetadataEntity<number> {
  /** 实际关联的装备配置 ID，不能由实体 id 替代。 */
  configId: number;
  icon: string;
  seasonId?: number;
  smallIcon?: string;
  desc?: string;
  elationDesc?: string;
  /** 装备分类。星徽为 Emblem；空字符串为仅展示用的特殊道具 */
  category: string;
  categoryName?: string;
  slotCount?: number;
  priority?: number;
  dressRule?: string;
  dressRuleParams?: number[];
  equipFunc?: string;
  /** 星徽加入的羁绊 ID，或其它 EquipFunc 参数 */
  equipFuncParams?: number[];
  properties?: HsrGridFightProperty[];
  params?: number[];
  effectParams?: number[];
  tagIds?: number[];
  tags?: HsrGridFightEquipTag[];
  craft?: HsrGridFightCraft;
  /** 同一成品可有多种配方，每条配方有独立的赛季归属。 */
  crafts?: HsrGridFightCraft[];
  recommendRoleIds?: number[];
}

export interface HsrGridFightTraitLayer {
  layer: number;
  quality?: string;
  bindType?: string;
  desc?: string;
  params?: number[];
  memberProperties?: HsrGridFightProperty[];
  allMemberProperties?: HsrGridFightProperty[];
  mazeBuffId?: number;
  /** 对应增益的原始说明和参数，与层属性 desc/params 分别保留。 */
  mazeBuffDesc?: string;
  mazeBuffSimpleDesc?: string;
  mazeBuffParams?: number[];
}

export interface HsrGridFightTraitEffectLayer {
  layer: number;
  desc?: string;
  params?: number[];
  descParams?: number[];
}

export interface HsrGridFightTraitEffect {
  id: number;
  type: string;
  icon?: string;
  layers: HsrGridFightTraitEffectLayer[];
}

export interface HsrGridFightTrait extends IMetadataEntity<number> {
  miniIcon?: string;
  desc?: string;
  simpleDesc?: string;
  params?: number[];
  traitType: string;
  activationType?: string;
  searchKey?: string;
  sortPriority?: number;
  seasonId?: number;
  beIds?: number[];
  layers: HsrGridFightTraitLayer[];
  effects: HsrGridFightTraitEffect[];
  roleIds: number[];
}

export interface HsrGridFightDifficultyRatio {
  chapterId: number;
  attackRatio?: number;
  defenceRatio?: number;
  hpRatio?: number;
  speedRatio?: number;
  stanceRatio?: number;
  allDamageReduce?: number;
}

export interface HsrGridFightBinaryDiffAdd {
  quality: number;
  enemyDifficultyAdd?: number;
}

export interface HsrGridFightDivision extends IMetadataEntity<number> {
  seasonId: number;
  progress: number;
  divisionLevel?: number;
  abbr?: string;
  isPromotion?: boolean;
  enemyDifficultyLevel?: number;
  affixChooseNumList?: number[];
  environmentDescs?: string[];
  uniqueEnvironmentDescs?: string[];
  hpMulti?: number;
  attackMulti?: number;
  counterMulti?: number;
  params?: number[];
  weeklyScoreModify?: number;
  expModify?: number;
  binaryNodeDiffAddRule?: number;
  binaryDiffAdds?: HsrGridFightBinaryDiffAdd[];
  difficultyByChapter?: HsrGridFightDifficultyRatio[];
}

export interface HsrGridFightAffix extends IMetadataEntity<number> {
  desc?: string;
  params?: number[];
  mazeBuffIds?: number[];
  /** 贪饕污染词条 */
  isInvasion?: boolean;
}

export interface HsrGridFightCamp extends IMetadataEntity<number> {
  seasonId?: number;
  monsterIds?: number[];
  battleAreaIds?: number[];
  bossBattleArea?: number;
}

export interface HsrGridFightNpc extends IMetadataEntity<number> {
  desc?: string;
  roundIcon?: string;
}

export interface HsrGridFightPresent extends IMetadataEntity<number> {
  desc?: string;
  bonusId?: number;
  shortenType?: string;
}

export interface HsrGridFightPortal extends IMetadataEntity<number> {
  desc?: string;
  params?: number[];
  inBook?: boolean;
  npcIds?: number[];
  npcs?: HsrGridFightNpc[];
  showBonusId?: number;
  showBonusIds?: number[];
  delayedShowBonus?: number[];
  seasonId?: number;
  refTraitIds?: number[];
  presents?: HsrGridFightPresent[];
}

export interface HsrGridFightAugment extends IMetadataEntity<number> {
  desc?: string;
  quality: string;
  categoryId?: number;
  miniIcon?: string;
  params?: number[];
  chapterLimit?: number[];
  seasonId?: number;
  refTraitIds?: number[];
  searchKey?: string;
}

/** 奇遇伙伴效果 */
export interface HsrGridFightPetPalEffect extends IEntity<number> {
  desc: string;
  addDesc?: string;
  switchDesc: string;
  simpleDesc?: string;
  isOCEffective?: boolean;
  jsonPath: string;
  params: number[];
}

/** 奇遇伙伴效果组 */
export interface HsrGridFightPetPalHandbookGroup extends IEntity<number> {
  petpalId: number;
  categoryId: number;
  categoryDesc: string;
  desc: string;
  effectIds: number[];
  /** 分组后的效果 */
  effects: HsrGridFightPetPalEffect[];
}

/** 奇遇伙伴 */
export interface HsrGridFightPetPal extends IMetadataEntity<number> {
  desc?: string;
  headImage?: string;
  smallIcon?: string;
  figureUp?: string;
  figureDown?: string;
  sort: number;
  /** 伙伴原始效果池顺序 */
  effectIds: number[];
  handbookGroups: HsrGridFightPetPalHandbookGroup[];
}

export interface HsrGridFightSpotLightTag extends IMetadataEntity<number> {
  tagColor: string;
}

/** 已有赛季实体的复合引用 */
export interface HsrGridFightSeasonEntityRef extends IEntity<number> {
  seasonId: number;
}

/** 主角光环，独立于羁绊；仅部分条目通过 traitId 关联 Spotlight 羁绊。 */
export interface HsrGridFightSpotLight extends IMetadataEntity<number> {
  desc: string;
  params: number[];
  jsonPath: string;
  tagIds: number[];
  tags: HsrGridFightSpotLightTag[];
  suitableRoleIds: number[];
  suitableRoles: HsrGridFightSeasonEntityRef[];
  isOCEffective: boolean;
  isCarry?: boolean;
  enemyDiffLvAdd?: number;
  traitId?: number;
  traits?: HsrGridFightSeasonEntityRef[];
  remark?: { desc: string; params: number[] };
}

export interface HsrGridFightRoleSpotLightRecommendation {
  roleId: number;
  seasonId: number;
  frontBackType: "Both" | "Front" | "Back";
  firstRecommendSpotLightIds: number[];
  secondRecommendSpotLightIds: number[];
}

export interface HsrGridFightSpotLightMazeBuff extends IMetadataEntity<number> {
  desc: string;
  nameHash: string;
  descHash: string;
  params: number[];
  level: number;
  maxLevel: number;
  buffSeries: number;
  buffRarity: number;
  modifierName: string;
  inBattleBindingType: string;
  inBattleBindingKey: string;
  buffEffect: string;
  mazeBuffType: string;
}
