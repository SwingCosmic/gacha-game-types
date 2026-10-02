import { IMetadataEntity } from "@game/common/IEntity";

/** 任务图元素核心字段 */
export interface MainMissionCoreInfo<T extends string> {
  kind: T;
  /** 图内显示顺序（章节内任务序号或章节展示序） */
  order?: number;
}

/** 有剧情内容的任务图元素字段（任务/章节） */
export interface MainMissionInfo<T extends string> extends MainMissionCoreInfo<T> {
  desc: string;
  type: string;
  worldId: number;
  isEndmost: boolean;
}

/** 主线任务 */
export interface HsrMainMission extends IMetadataEntity<number>, MainMissionInfo<"mission"> {
  /**
   * desc 的回退内容（首个带描述的子任务）
   */
  descFallback?: string;
  displayPriority: number;
  nextMainMissionList: number[];
  takeOperation: string;
  beginOperation: string;
  takeParam: {
    type: string;
    value: number;
  }[];
  beginParam: {
    type: string;
  }[];
  nextTrackMainMission: number;
  trackWeight: number;
  rewardId: number;
  displayRewardId: number;
  missionPack?: number;
  chapterId: number;
  subRewardList: number[];
  isInRaid?: boolean;
}

/** 主线任务包 */
export interface HsrMainMissionPack extends IMetadataEntity<number>, MainMissionCoreInfo<"pack"> {
  mainMissionIds: number[];
}

/** 子任务 */
export interface HsrSubMission extends IMetadataEntity<number> {
  desc: string;
}

/** 主线章节 */
export interface HsrMainMissionChapter extends IMetadataEntity<number>, MainMissionInfo<"chapter"> {
  stageName: string;
  chapterType: string;
  startMission?: number;
  endMission?: number;
  missionIds: number[];
  displayPriority?: number;
}

/** 多视角故事线（命途歧路泳道按视角名+头像分组） */
export interface HsrMainMissionStoryline extends IMetadataEntity<number>, MainMissionCoreInfo<"storyline"> {
  chronicleIcon?: string;
  mediumImg?: string;
  color?: string;
  missionIds: number[];
}

export interface HsrWorldData extends IMetadataEntity<number> {
  isRealWorld: boolean;
  isShow: boolean;
  desc: string;
  simpleDesc: string;
  worldLanguageName: string;
  mapSpaceTypeList: string[];
  trainSpaceType: string;
  chapterIcon: string;
  chronicleWorldBg?: string;
  chronicleWorldSubBg?: string;
  chronicleWorldPredict?: string;
  chronicleWorldProcessing?: string;
}


