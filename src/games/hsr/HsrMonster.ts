import { IMetadataEntity } from "@game/common/IEntity";

export interface HsrMonsterSkill {
  id: number;
  name: string;
  desc: string;
  /** 攻击类型 (Normal/BPSkill/Ultra/Talent/Maze等) */
  attackType: string;
  /** 技能类型文本 */
  typeText: string;
  triggerKey: string;
  /** 技能效果标签文本 */
  effectText: string;
  icon?: string;
  params: number[];
  /** 阶段列表 */
  phaseList: number[];
}

export interface HsrMonster extends IMetadataEntity<number> {
  desc: string;
  monsterTemplateId: number;
  /** 精英战斗组 */
  eliteGroup: number;
  /** 等级曲线分组 */
  hardLevelGroup: number;
  /** 攻击修正系数 */
  attackModifyRatio?: number;
  /** 防御修正系数 */
  defenceModifyRatio?: number;
  /** 生命修正系数 */
  hpModifyRatio?: number;
  /** 速度修正系数 */
  speedModifyRatio?: number;
  /** 韧性修正系数 */
  stanceModifyRatio?: number;
  /** 速度修正值 */
  speedModifyValue?: number;
  /** 韧性修正值 */
  stanceModifyValue?: number;
  /** 弱点列表 */
  stanceWeakList: string[];
  /** 伤害抗性 */
  damageTypeResistance: {
    damageType: string;
    value?: number;
  }[];
  /** 负面效果抵抗 */
  debuffResist: {
    key: string;
    value?: number;
  }[];
  customValueTags: string[];
  customValues: any[];
  dynamicValues: any[];
  summonIdList: number[];
  overrideAiPath: string;
  overrideAiSkillSequence: any[];
  overrideSkillParams: any[];
  abilityNameList: string[];
  skillList: number[];
  monsterStrategy: any[];
  skills?: HsrMonsterSkill[];
}

export interface HsrMonsterTemplate extends IMetadataEntity<number> {
  roundIcon?: string;
  image?: string;
  manikinImage?: string;
  rank: string;
  attackBase?: number;
  defenceBase?: number;
  hpBase?: number;
  speedBase?: number;
  stanceBase?: number;
  criticalDamageBase?: number;
  statusResistanceBase?: number;
  initialDelayRatio?: number;
  stanceCount: number;
  stanceType: string;
  /** 弱点列表（取模板下首个怪物变体） */
  stanceWeakList: string[];
  natureId: number;
  minimumFatigueRatio?: number;
  atlasSortId?: number;
  monsterCampId?: number;
  speedModifyValue?: number;
  stanceModifyValue?: number;
  templateGroupId?: number;
  /** 等级曲线分组（取模板下首个怪物变体，供前端确定默认等级曲线） */
  hardLevelGroup?: number;
  /** 精英战斗组（取模板下首个怪物变体，供前端确定默认战斗组修正） */
  eliteGroup?: number;
  monsters: HsrMonster[];
}
