import { IEntity } from "@game/common/IEntity";

/**
 * 演出来源类型。
 *
 * 该字段用于区分来源表，不是 `ELevelPerformanceType` 的直接映射；
 */
export type HsrPerformanceType = "A" | "C" | "D" | "DS" | "E" | "Video";

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

/** 演出表Video（播放视频的演出） */
export interface HsrPerformanceVideo extends HsrPerformanceBase<"Video"> {}

/** 官方剧情回顾/跳过确认文案 */
export interface HsrPerformanceSkipOverride extends IEntity<number> {
  /** 演出ID */
  id: number;
  /** 回顾界面的演出类型标注。
   * 与演出来源表不严格对应（如标注 D 的行可能实际来自 PerformanceC 表） 
   */
  performanceType: "C" | "D" | "E" | "PlayVideo";
  desc?: string;
  /** 是否用 overrideCharacterList 覆盖回顾界面的角色展示 */
  isOverrideCharacter?: boolean;
  /** 回顾界面展示的角色，元素为 TalkSentenceName_* 文本键 */
  overrideCharacterList: string[];
  important?: boolean;
  confirmRequiredToSkip?: boolean;
  /** 所属演出包 ID（极少数行有） */
  packId?: number;
}

/**
 * 官方剧情回放文案覆盖。
 *
 * 为剧情回放界面提供段落文案；与 SkipOverride 同演出共存时两者文本不同
 * （SkipOverride 面向跳过确认，ReplayOverride 面向回放展示），回放展示以本表为准。
 */
export interface HsrPerformanceReplayOverride extends IEntity<number> {
  /** 演出ID */
  id: number;
  /** 回放界面的演出类型标注 */
  performanceType: "A" | "PlayVideo";
  desc?: string;
}

/**
 * 演出跳过标记（PerformanceSkipFlagC/D/E 合并）。
 */
export interface HsrPerformanceSkipFlag extends IEntity<number> {
  /** 演出ID */
  id: number;
  skippable?: boolean;
  /** 演出中出现的角色，元素为 TalkSentenceName_* 文本键 */
  actorList: string[];
  /** 官方标注该演出包含重要分支（选项/真随机结果的分歧内容） */
  containImportBranch?: boolean;
}

/** 联合类型，包含所有演出类型 */
export type HsrPerformance =
  | HsrPerformanceA
  | HsrPerformanceC
  | HsrPerformanceD
  | HsrPerformanceDS
  | HsrPerformanceE
  | HsrPerformanceVideo;
