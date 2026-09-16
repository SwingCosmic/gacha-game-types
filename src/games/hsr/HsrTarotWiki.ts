import { IEntity } from "@game/common/IEntity";

/** 实验记录明细 (叶子节点) */
export interface HsrTarotWikiSubdata extends IEntity<number> {
  type: "subdata";
  name: string;
  desc: string;
  /** 关联的变动ID列表 */
  changeId: number[];
}

/** 实验进程 */
export interface HsrTarotWikiData extends IEntity<number> {
  type: "data";
  name: string;
  desc: string;
  /** 关联的变动ID列表 */
  changeId: number[];
  /** 子记录列表 */
  children: HsrTarotWikiSubdata[];
}

/** 实验进程时间轴 (顶层) */
export interface HsrTarotWikiTimeline extends IEntity<number> {
  type: "timeline";
  name: string;
  progress: number;
  specialType?: number;
  unlockId?: number;
  /** 实验进程列表 */
  children: HsrTarotWikiData[];
}

// ===== changes.json 数据结构 =====

/** 实验明细变动 */
export interface HsrTarotWikiChangeinfo {
  changeId: number;
  newTitle: string;
  newDetails: string;
}

/** 实验记录解锁条件 */
export interface HsrTarotWikiUnlockCondition {
  unlockId: number;
  conditions: {
    type: string;
    param: string;
  }[];
  showCondition: any[];
  /** 关联的变动列表 */
  changes: HsrTarotWikiChangeinfo[];
}
