
/** HardLevelGroup 单个等级的曲线行 */
export interface HsrHardLevelGroupLevel {
  attackRatio: number;
  defenceRatio: number;
  hpRatio: number;
  speedRatio: number;
  stanceRatio: number;
  statusProbability: number | null;
  statusResistance: number | null;
  combatPowerList: number[];
}

/** 等级曲线分组（minLevel/maxLevel 由组内等级行决定，如 g1/g2 为 1-100、g3 为 1-120） */
export interface HsrHardLevelGroup {
  minLevel: number;
  maxLevel: number;
  /** key 为等级 */
  levels: Record<number, HsrHardLevelGroupLevel>;
}

export type HsrHardLevelGroupDict = Record<number, HsrHardLevelGroup>;

/** EliteGroup 战斗组修正（影响敌人实战属性倍率） */
export interface HsrEliteGroup {
  attackRatio: number;
  defenceRatio: number;
  hpRatio: number;
  speedRatio: number;
  stanceRatio: number;
}


export type HsrEliteGroupDict = Record<number, HsrEliteGroup>;
