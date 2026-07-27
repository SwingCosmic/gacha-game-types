import { IMetadataEntity } from "@game/common/IEntity";

export interface MainMissionInfo<T extends string> {
  desc: string;
  type: string;
  worldId: number;
  kind: T;
  isEndmost: boolean;
  order?: number;
}

/** 主线任务 */
export interface HsrMainMission extends IMetadataEntity<number>, MainMissionInfo<"mission"> {
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
  
}

/** 主线任务包 */
export interface HsrMainMissionPack extends IMetadataEntity<number>, MainMissionInfo<"pack"> {
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


