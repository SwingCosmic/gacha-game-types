import { HsrMainMission, HsrMainMissionPack, HsrMainMissionChapter } from "./index";



export interface HsrMainMissionNode {
  id: number;
  data: HsrMainMission;
  /** 可以根据missionPack或者chapterId分组 */
  combo?: number;
}
;

export interface HsrMainMissionCombo {
  id: number;
  data: HsrMainMissionPack | HsrMainMissionChapter;
}
;

export interface HsrMainMissionEdge {
  source: number;
  target: number;
}

export interface HsrMainMissionGraph {
  nodes: HsrMainMissionNode[];
  edges: HsrMainMissionEdge[];
  combos: HsrMainMissionCombo[];
}
