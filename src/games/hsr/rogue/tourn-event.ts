import type { IEntity, IMetadataEntity } from "@game/common/IEntity";

/** 图鉴解锁进度关联的 NPC */
export interface HsrRogueTournEventNpc extends IEntity<number> {
  /** 相对上游数据根目录的配置路径 */
  npcJsonPath?: string;
}

/** 差分宇宙事件图鉴入口 */
export interface HsrRogueTournEvent extends IMetadataEntity<number> {
  typeDisplayId: number;
  typeName?: string;
  unlockDisplayId: number;
  unlockDesc?: string;
  imageId: number;
  priority: number;
  isUsed: boolean;
  /** 保留 UnlockNPCProgressIDList 的全部关联和原始顺序，包括不同版本 NPC。 */
  npcEntries: HsrRogueTournEventNpc[];
}
