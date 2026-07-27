import { IEntity } from "@game/common/IEntity";

/** 实验记录明细 (叶子节点) */
export interface HsrTarotWikiSubdata extends IEntity<number> {
  type: "subdata";
  /** 明细标题 */
  name: string;
  /** 明细详情 */
  desc: string;
  /** 关联的变动ID列表 */
  changeId: number[];
}

/** 实验进程 */
export interface HsrTarotWikiData extends IEntity<number> {
  type: "data";
  /** 进程标题 */
  name: string;
  /** 进程详情 */
  desc: string;
  /** 关联的变动ID列表 */
  changeId: number[];
  /** 子记录列表 */
  children: HsrTarotWikiSubdata[];
}

/** 实验进程时间轴 (顶层) */
export interface HsrTarotWikiTimeline extends IEntity<number> {
  type: "timeline";
  /** 阶段标题 */
  name: string;
  /** 进度值 */
  progress: number;
  /** 特殊类型 */
  specialType?: number;
  /** 解锁条件ID */
  unlockId?: number;
  /** 实验进程列表 */
  children: HsrTarotWikiData[];
}

// ===== changes.json 数据结构 =====

/** 实验明细变动 */
export interface HsrTarotWikiChangeinfo {
  /** 变动ID */
  changeId: number;
  /** 新标题 */
  newTitle: string;
  /** 新详情 */
  newDetails: string;
}

/** 实验记录解锁条件 */
export interface HsrTarotWikiUnlockCondition {
  /** 解锁ID */
  unlockId: number;
  /** 解锁条件列表 */
  conditions: {
    type: string;
    param: string;
  }[];
  /** 展示条件 */
  showCondition: any[];
  /** 关联的变动列表 */
  changes: HsrTarotWikiChangeinfo[];
}
