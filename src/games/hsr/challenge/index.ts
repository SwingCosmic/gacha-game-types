import type { IMetadataEntity } from "../../../common/IEntity";

/** 期级/节点级 buff（天气、水温、可选 buff） */
export interface HsrChallengeBuff {
  id: number;
  name: string;
  desc: string;
  icon?: string;
  params: number[];
}

/** 波次中的单个敌人 */
export interface HsrChallengeEnemy {
  /** 战斗 ID，精确到变体 */
  monsterId: number;
  /** 敌人模板主键，前端跳转用 */
  templateId: number;
  /** 挑战侧 HP 公式计算并向上取整 */
  hp: number;
}

/** 一个关卡 */
export interface HsrChallengeStage {
  stageId: number;
  /** 敌人等级 */
  level: number;
  /** 等级曲线分组 */
  hardLevelGroup?: number;
  /** 生效战斗组；关卡未指定时回退敌人变体自带值 */
  eliteGroup?: number;
  /** 波次 × 每波有序敌人 */
  waves: HsrChallengeEnemy[][];
}

/** 上半 / 下半 / 第三节点（星启） */
export type HsrChallengeNodeHalf = 1 | 2 | 3;

export interface HsrChallengeNode {
  half: HsrChallengeNodeHalf;
  /** 节点名，最新一期可能为空 */
  name?: string;
  /** 推荐弱点，与 HsrMonster 弱点字段同口径 */
  damageTypes: string[];
  /** 节点敌方特性（水温等） */
  enemyBuffs: HsrChallengeBuff[];
  /** 展示 Boss（模板 ID 口径），无则为空数组 */
  bossMonsterIds: number[];
  stages: HsrChallengeStage[];
}

export interface HsrChallengeFloor {
  id: number;
  /** 层序（1 起始） */
  index: number;
  name: string;
  nodes: HsrChallengeNode[];
}

/** 四模式期实体公共基类 */
export interface HsrChallengeSeasonBase extends IMetadataEntity<number> {
  code: string;
  /** 期开始/结束时间，格式 "YYYY-MM-DD HH:mm:ss" */
  beginTime?: string;
  endTime?: string;
  icon: string;
  poster?: string;
  /** 期天气 */
  weatherBuff?: HsrChallengeBuff;
  /** 玩家可选 buff，外层按节点或分组 */
  selectableBuffs: HsrChallengeBuff[][];
  /** 层列表；期列表（index.json）中不含本字段 */
  floors: HsrChallengeFloor[];
}

/** 得分/星数目标 */
export interface HsrChallengeTarget {
  id: number;
  type: string;
  name: string;
  /** 轮数/分数阈值等 */
  param?: number;
}

/** 出场索引条目（语言无关） */
export interface HsrChallengeAppearance {
  mode: "theme" | "story" | "boss" | "peak";
  seasonId: number;
  floorIndex: number;
  half: HsrChallengeNodeHalf;
  /** 敌人等级 */
  level: number;
  hp: number;
  /** 战斗 ID，精确到变体 */
  monsterId: number;
}

/** 出场索引；key 为 templateId */
export type HsrChallengeAppearances = Record<string, HsrChallengeAppearance[]>;
