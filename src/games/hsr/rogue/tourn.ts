import { IMetadataEntity } from "@game/common/IEntity";

/** 差分宇宙赛季（来自 ActivityPanel / index.json） */
export interface HsrRogueTournSeason extends IMetadataEntity<number> {
  /** 赛季序号 1/2/3… */
  season: number;
  desc?: string;
  icon?: string;
}

/**
 * 差分宇宙奇物（跨赛季）
 * 主表 RogueTournMiracle + 展示表 RogueTournMiracleDisplay
 * （MiracleID === MiracleDisplayID，均为 4 位 ID）
 */
export interface HsrRogueMiracle extends IMetadataEntity<number> {
  /** 赛季：TournMode 去掉 `Tourn` 前缀后的数字 */
  season: number;
  /** Common / Rare / Legendary / Negative */
  category?: string;
  /**
   * 主表字段 MiracleDisplayID（1–421），指向模拟宇宙共用展示表，
   * 与差分宇宙展示主键不同
   */
  miracleDisplayId: number;
  miracleEffectId: number;
  handbookMiracleId?: number | null;
  /**
   * 是否进入图鉴列表（RogueTournHandbookMiracle）。
   * false：无图鉴特殊变体（如名称含「破解版」等）
   */
  inHandbook: boolean;
  /** 背景描述 MiracleBGDesc */
  desc?: string;
  /** 立绘/大图 MiracleFigureIconPath */
  figureIcon?: string;
}
