import type { IMetadataEntity } from "@game/common/IEntity";
import type { HsrItemCost } from "./HsrItem";

/** 奇缘星魂；独立于普通六阶星魂，id 可以与普通星魂重号。 */
export interface HsrAvatarExRank extends IMetadataEntity<number> {
  avatarId: number;
  desc: string;
  params: number[];
  /** 效果分类的本地化文本，例如「强化」「群攻」。 */
  effectText: string;
  /** 原表独立背景纹理转换后的地址；不根据普通星魂序号拼接。 */
  picture: string;
  /** 保留游戏内 3D 面板资源路径，不转换为图片 URL。 */
  panelPrefabPath: string;
  triggerHash: number;
  rankAbilities: string[];
  extraEffectIds: number[];
  /** 反向关联，跨技能等级去重。 */
  relatedSkillIds: number[];
  unlockCost: HsrItemCost;
  guideVideoId: number;
}
