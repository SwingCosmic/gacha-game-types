import type {
  HsrChallengeBuff,
  HsrChallengeFloor,
  HsrChallengeInvasion,
  HsrChallengeNode,
  HsrChallengeSeasonBase,
  HsrChallengeStage,
  HsrChallengeTarget,
} from "./index";

/** 异相仲裁奖牌 */
export interface HsrChallengeBadge {
  /** Bronze / Silver / Gold / Ultra */
  level: string;
  name: string;
  icon?: string;
}

/** 异相仲裁层 */
export interface HsrChallengePeakFloor extends HsrChallengeFloor {
  progressValues: number[];
  hpProgressValues: number[];
  /** 回合上限/死亡数等 */
  targets: HsrChallengeTarget[];
  /** 王棋层标记 */
  isBoss?: boolean;
  /** 王棋层绝境难度 */
  hard?: {
    title: string;
    /** 绝境敌方特性 */
    enemyBuffs: HsrChallengeBuff[];
    /** 绝境关卡，敌人等级高于标准难度 */
    stages: HsrChallengeStage[];
    /** 彩色奖牌阈值 */
    colorMedalTarget?: number;
    hardTarget?: HsrChallengeTarget;
    /** 贪饕污染摘要；仅受侵染关卡携带（与节点同口径） */
    invasion?: HsrChallengeInvasion;
  };
}

/**
 * 异相仲裁（Anomaly Arbitration）期。无排期表，期序按 ID；
 * 每期 4 层 = 3 前置层 + 1 Boss 层，每层单节点
 */
export interface HsrChallengePeakSeason extends HsrChallengeSeasonBase {
  badges: HsrChallengeBadge[];
  floors: HsrChallengePeakFloor[];
}
