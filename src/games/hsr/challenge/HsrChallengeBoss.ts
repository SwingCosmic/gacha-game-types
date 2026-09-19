import type {
  HsrChallengeFloor,
  HsrChallengeNode,
  HsrChallengeSeasonBase,
  HsrChallengeTarget,
} from "./index";

/** 末日幻影层 */
export interface HsrChallengeBossFloor extends HsrChallengeFloor {
  /** 标准状态得分目标 */
  scoreTargets: HsrChallengeTarget[];
  /**
   * 星启模式（游戏内可开关）。开启时在标准节点后追加显示 node，得分目标切换为
   * scoreTargets；关闭时仅保留标准节点与 floor.scoreTargets。
   * 仅星启期期末层存在。
   */
  tierce?: {
    node: HsrChallengeNode;
    scoreTargets: HsrChallengeTarget[];
  };
}

/** 末日幻影（Apocalyptic Shadow）期 */
export interface HsrChallengeBossSeason extends HsrChallengeSeasonBase {
  /** 是否开启星启模式 */
  hasTierce: boolean;
  floors: HsrChallengeBossFloor[];
}
