import { IMetadataEntity } from "@game/common/IEntity";

export interface HsrMonsterSkill {
  /** 技能ID */
  id: number;
  /** 技能名称 */
  name: string;
  /** 技能描述 */
  desc: string;
  /** 攻击类型 (Normal/BPSkill/Ultra/Talent/Maze等) */
  attackType: string;
  /** 技能类型文本 */
  typeText: string;
  /** 技能触发键 */
  triggerKey: string;
  /** 技能效果标签文本 */
  effectText: string;
  /** 技能图标 */
  icon?: string;
  /** 技能参数列表 */
  params: (number | null)[];
  /** 阶段列表 */
  phaseList: number[];
}

export interface HsrMonster extends IMetadataEntity<number> {
  /** 怪物介绍 (来自 MonsterIntroduction) */
  desc: string;
  /** 怪物模板ID */
  monsterTemplateId: number;
  /** 精英组 */
  eliteGroup: number;
  /** 难度组 */
  hardLevelGroup: number;
  /** 攻击修正系数 */
  attackModifyRatio: number | null;
  /** 防御修正系数 */
  defenceModifyRatio: number | null;
  /** 生命修正系数 */
  hpModifyRatio: number | null;
  /** 速度修正系数 */
  speedModifyRatio: number | null;
  /** 韧性修正系数 */
  stanceModifyRatio: number | null;
  /** 速度修正值 (仅少数怪物有) */
  speedModifyValue: number | null;
  /** 韧性修正值 (仅少数怪物有) */
  stanceModifyValue: number | null;
  /** 弱点列表 */
  stanceWeakList: string[];
  /** 伤害抗性 */
  damageTypeResistance: {
    damageType: string;
    value: number | null;
  }[];
  /** 负面效果抵抗 */
  debuffResist: {
    key: string;
    value: number | null;
  }[];
  /** 自定义标签 */
  customValueTags: string[];
  /** 自定义值 */
  customValues: any[];
  /** 动态值 */
  dynamicValues: any[];
  /** 召唤物ID列表 */
  summonIdList: number[];
  /** 覆盖AI路径 */
  overrideAiPath: string;
  /** 覆盖AI技能序列 */
  overrideAiSkillSequence: any[];
  /** 覆盖技能参数 (含混淆字段名) */
  overrideSkillParams: any[];
  /** 技能名称列表 */
  abilityNameList: string[];
  /** 技能ID列表 */
  skillList: number[];
  /** 怪物攻略 */
  monsterStrategy: any[];
  /** 技能详情列表 (通过 fillMonsterData 填充) */
  skills?: HsrMonsterSkill[];
}

export interface HsrMonsterTemplate extends IMetadataEntity<number> {
  roundIcon?: string;
  image?: string;
  manikinImage?: string;
  rank: string;
  attackBase: number | null;
  defenceBase: number | null;
  hpBase: number | null;
  speedBase: number | null;
  stanceBase: number | null;
  criticalDamageBase: number | null;
  statusResistanceBase: number | null;
  initialDelayRatio: number | null;
  stanceCount: number;
  stanceType: string;
  natureId: number;
  minimumFatigueRatio: number | null;
  atlasSortId?: number;
  monsterCampId?: number;
  speedModifyValue?: number | null;
  stanceModifyValue?: number | null;
  templateGroupId?: number;
  monsters: HsrMonster[];
}
