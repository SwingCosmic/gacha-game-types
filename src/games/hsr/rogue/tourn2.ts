import { IMetadataEntity } from "@game/common/IEntity";

/** 泰坦·S2 */
export interface HsrRogueTitan extends IMetadataEntity<number> {
  /** 日/夜 */
  type: string;
  characterName: string;
  icon: string;
  roundIcon: string;
  picture: string;
  shadowPicture: string;
}