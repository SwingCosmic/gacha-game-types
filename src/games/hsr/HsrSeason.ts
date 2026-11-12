import type { IMetadataEntity } from "../../common/IEntity";

/** 玩法共用赛季索引。id 仅标识记录，筛选、排序和展示使用 season。 */
export interface HsrSeason extends IMetadataEntity<number> {
  /** 实际赛季编号，与记录 id 的取值无关。 */
  season: number;
  desc?: string;
}
