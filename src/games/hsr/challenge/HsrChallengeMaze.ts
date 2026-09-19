import type {
  HsrChallengeBuff,
  HsrChallengeFloor,
  HsrChallengeNode,
  HsrChallengeSeasonBase,
  HsrChallengeTarget,
} from "./index";

/** 混沌回忆层 */
export interface HsrChallengeMazeFloor extends HsrChallengeFloor {
  /** 三星星数条件（ROUNDS_LEFT / DEAD_AVATAR） */
  starTargets: HsrChallengeTarget[];
  /**
   * 星启模式（游戏内可开关）。开启时在标准节点后追加显示 node，星数条件切换为
   * starTargets；关闭时仅保留标准节点与 floor.starTargets。仅星启期期末层存在。
   */
  tierce?: {
    node: HsrChallengeNode;
    starTargets: HsrChallengeTarget[];
  };
}

/** 混沌回忆（Memory of Chaos）期 */
export interface HsrChallengeMazeSeason extends HsrChallengeSeasonBase {
  /** 混沌回忆无期级可选 buff，恒为空数组 */
  selectableBuffs: HsrChallengeBuff[][];
  floors: HsrChallengeMazeFloor[];
}
