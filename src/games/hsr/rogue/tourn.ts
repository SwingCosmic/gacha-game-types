import { IEntity, IMetadataEntity } from "@game/common/IEntity";

/** 差分宇宙赛季（来自 ActivityPanel / index.json） */
export interface HsrRogueTournSeason extends IMetadataEntity<number> {
  /** 赛季序号 1/2/3… */
  season: number;
  desc?: string;
  icon?: string;
}

/**
 * 奇物效果
 * 差分宇宙 / 模拟宇宙共用；经 miracleEffectId 1:1 挂到奇物上
 */
export interface HsrRogueMiracleEffect extends IEntity<number> {
  desc?: string;
  params: number[];
  dynamicHint?: string;
}

/**
 * 差分宇宙奇物（跨赛季）
 */
export interface HsrRogueMiracle extends IMetadataEntity<number> {
  /** 赛季：TournMode 去掉 `Tourn` 前缀后的数字 */
  season: number;
  /** Common / Rare / Legendary / Negative */
  category?: string;
  /**
   * 指向模拟宇宙共用展示表，
   * 与差分宇宙展示主键不同
   */
  miracleDisplayId: number;
  miracleEffectId: number;
  handbookMiracleId?: number | null;
  /**
   * 是否进入图鉴列表。
   * false：无图鉴特殊变体（如名称含「破解版」等）
   */
  inHandbook: boolean;
  /** 背景描述 */
  desc?: string;
  /** 立绘/大图  */
  figureIcon?: string;
  /** 奇物效果 */
  effect?: HsrRogueMiracleEffect;
}
