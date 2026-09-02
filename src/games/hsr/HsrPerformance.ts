import { IEntity } from "@game/common/IEntity";

/**
 * 演出来源类型。
 *
 * 该字段用于区分来源表，不是 `ELevelPerformanceType` 的直接映射；
 */
export type HsrPerformanceType = "A" | "C" | "D" | "DS" | "E";

/** 与演出来源类型对应的表名。 */
export type HsrPerformanceSourceTable = `Performance${HsrPerformanceType}`;

/** 演出跳过策略 */
export type HsrPerformanceSkipType = "Never" | "AfterSeen" | "Always";

/** 演出开始或结束时的黑屏策略 */
export type HsrPerformanceBlackType = "None" | "Full" | "NoPre" | "NoPost" | "NoPrePost";

/** 演出期间切换本地玩家形态的方式 */
export type HsrPerformanceChangePlayerType = "None" | "StoryLine" | "Character";

/** 
 * Performance聚合索引
 * 其中`id`和`type`构成复合主键
 */
export interface HsrPerformanceIndex<
  T extends HsrPerformanceType = HsrPerformanceType,
> extends IEntity<number> {
  /** Performance ID */
  id: number;
  /** 来源类型，也是联合类型的判别字段。 */
  type: T;
  /** 指向 Config 或 Story 演出 JSON 的相对路径。 */
  path: string;
}

/**
 * 按语义抽取的演出公共基类。
 */
export interface HsrPerformanceBase<T extends HsrPerformanceType> extends HsrPerformanceIndex<T> {
  /** 演出所在 Plane ID */
  planeId?: number;
  /** 演出所在 Floor ID */
  floorId?: number;
  /** 演出跳过策略 */
  isSkip?: HsrPerformanceSkipType;
  /** 演出开始黑屏策略 */
  startBlack?: HsrPerformanceBlackType;
  /** 演出结束黑屏策略 */
  endBlack?: HsrPerformanceBlackType;
  /** 演出结束时是否播放裂屏效果 */
  endWithCrack?: boolean;
}

/** D、DS、E 类演出共享的角色相关字段。 */
export interface HsrPerformanceCharacterFields {
  /** 演出角色参数；空字符串也是有效的原始值。 */
  performanceCharacter: string;
  /** 演出期间切换本地玩家形态的方式。 */
  changePlayerType?: HsrPerformanceChangePlayerType;
}

/** 演出表A */
export interface HsrPerformanceA extends HsrPerformanceBase<"A"> {}

/** 演出表C */
export interface HsrPerformanceC extends HsrPerformanceBase<"C"> {}

/** 演出表D */
export interface HsrPerformanceD
  extends HsrPerformanceBase<"D">, HsrPerformanceCharacterFields {
  /** 演出关联的 Level Group ID。 */
  groupId?: number;
}

/** 演出表DS，和D相同 */
export interface HsrPerformanceDS
  extends HsrPerformanceBase<"DS">, HsrPerformanceCharacterFields {
  /** 演出关联的 Level Group ID。 */
  groupId?: number;
}

/** 演出表E */
export interface HsrPerformanceE
  extends HsrPerformanceBase<"E">, HsrPerformanceCharacterFields {
  /** 是否为开场介绍类对白。 */
  isIntroDialogue?: boolean;
}

/** 联合类型，包含所有演出类型 */
export type HsrPerformance =
  | HsrPerformanceA
  | HsrPerformanceC
  | HsrPerformanceD
  | HsrPerformanceDS
  | HsrPerformanceE;
