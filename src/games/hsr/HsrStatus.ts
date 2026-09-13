import { IMetadataEntity } from "@game/common/IEntity";

/** 战斗状态  */
export interface HsrStatus extends IMetadataEntity<number> {
  /** 修饰器名称 */
  modifierName: string;
  /** 状态类型 (Buff/Debuff/Other) */
  statusType: string;
  /** 状态描述 */
  desc: string;
  /** 状态效果文本 (部分条目无此字段) */
  effect: string;
  /** 高清图标 */
  iconHighSize?: string;
  /** 是否可驱散 */
  canDispel?: boolean | null;
  /** 读取参数列表 */
  readParamList: string[];
  /** 标签列表 */
  tagList: string[];
}
