import { IMetadataEntity } from "@game/common/IEntity";

/** 战斗状态  */
export interface HsrStatus extends IMetadataEntity<number> {
  /** 修饰器名称 */
  modifierName: string;
  /** 状态类型 (Buff/Debuff/Other) */
  statusType: string;
  desc: string;
  effect?: string;
  iconHighSize?: string;
  /** 是否可驱散 */
  canDispel?: boolean | null;
  /** 读取参数列表 */
  readParamList: string[];
  tagList: string[];
}
