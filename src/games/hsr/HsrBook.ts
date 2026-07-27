import { IEntity, IMetadataEntity } from "@game/common/IEntity";
import { HsrItem, HsrItemConfig } from "./HsrItem";

/** 书籍/阅读物 */
export interface HsrBook extends HsrItemConfig {
  seriesId: number;
  seriesInsideId: number;
  content: string;
  displayType: number;
  notItem?: boolean;
  images: string[];
}

/** 书籍系列 */
export interface HsrBookSeriesSimple extends IMetadataEntity<number> {
  desc: string;
  num: number;
  world: number;
  visible: boolean;
  bookIds: number[];
}
export interface HsrBookSeries extends HsrBookSeriesSimple {
  books: HsrBook[];
  notItem?: boolean;
}

/** 书籍对应的地图信息 */
export interface HsrBookSeriesWorld extends IEntity<number> {
  desc: string;
  icon?: string;
  background?: string;
}