import type {
  HsrChallengeFloor,
  HsrChallengeNode,
  HsrChallengeSeasonBase,
  HsrChallengeTarget,
} from "./index";

/** 虚构叙事层 */
export interface HsrChallengeStoryFloor extends HsrChallengeFloor {
  /** 回合上限 */
  turnLimit?: number;
  /** 通关分 */
  clearScore?: number;
  /** 战斗目标 */
  battleTargets: HsrChallengeTarget[];
  /** 得分目标（TOTAL_SCORE 阈值） */
  scoreTargets: HsrChallengeTarget[];
  /**
   * 星启模式（游戏内可开关）。开启时在标准节点后追加显示 node，通关分/战斗目标/得分目标
   * 切换为星启口径；关闭时仅保留标准节点与层标准字段。仅星启期期末层存在。
   */
  tierce?: {
    node: HsrChallengeNode;
    /** 星启通关分 */
    clearScore: number;
    /** 星启战斗目标 */
    battleTargets: HsrChallengeTarget[];
    /** 星启得分目标 */
    scoreTargets: HsrChallengeTarget[];
  };
}

/** 虚构叙事（Pure Fiction）期 */
export interface HsrChallengeStorySeason extends HsrChallengeSeasonBase {
  themeId?: number;
  /** 主题配色（ChallengeStoryTheme），前端仅作局部点缀 */
  themeColors?: { main: string; sub1: string; sub2: string; eff: string };
  floors: HsrChallengeStoryFloor[];
}
