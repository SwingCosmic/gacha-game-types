import type {
  HsrChallengeFloor,
  HsrChallengeSeasonBase,
  HsrChallengeTarget,
} from "./index";

/** 末日幻影（Apocalyptic Shadow）层 */
export interface HsrChallengeBossFloor extends HsrChallengeFloor {
  /** 得分目标 */
  scoreTargets: HsrChallengeTarget[];
}

/** 末日幻影（Apocalyptic Shadow）期 */
export interface HsrChallengeBossSeason extends HsrChallengeSeasonBase {
  /** 是否开启星启模式 */
  hasTierce: boolean;
  floors: HsrChallengeBossFloor[];
}
