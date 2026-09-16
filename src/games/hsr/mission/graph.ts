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
  /** track: 主线追踪关系；unlock: 前置解锁关系 */
  kind?: "track" | "unlock";
}

export interface HsrMainMissionGraph {
  nodes: HsrMainMissionNode[];
  edges: HsrMainMissionEdge[];
  combos: HsrMainMissionCombo[];
}
