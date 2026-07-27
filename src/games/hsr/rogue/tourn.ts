import { IMetadataEntity } from "@game/common/IEntity";

/** 面具·S3 */
export interface HsrRoguePersona extends IMetadataEntity<number> {
  desc: string;
  effect: string;
  wishpowerGain: string;
  skill: string;
  params: number[];
  unlockDetail?: string;
}
/** 奇迹·S3 */
export interface HsrRoguePersonaGift extends IMetadataEntity<number> {
  skill: string;
  params: number[];
  personaIds: number[];
  rarity: number;
  type: string;
}

/** 差分宇宙房间类型（事件/战斗/奇遇等） */
export interface HsrRogueRoomCompType extends IMetadataEntity<number> {
  desc: string;
  update: string;
}

/** 信标·S3 */
export interface HsrRogueRoomAttribute extends IMetadataEntity<number> {
  skill: string;
  params: number[];
  effect: string;
}