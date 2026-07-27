

export type GiSourceType = "textmap" | "readable" | "subtitle";
export interface GiTextMap {
  tags?: string[];
  category?: Record<string, string>;
  textCHS?: string;
  textCHT?: string;
  textEN?: string;
  textJP?: string;
  textKR?: string;
  textDE?: string;
  textES?: string;
  textFR?: string;
  textID?: string;
  textPT?: string;
  textRU?: string;
  textTH?: string;
  textVI?: string;

  // 比崩铁多的两种语言
  textIT?: string;
  textTR?: string;

  id: string;

  kind: GiSourceType;
}

export interface GiTextMapAll {
  tags?: string[];
  lang: string;
  category?: Record<string, string>;
  text?: string;
  /**
   * 如果`kind`为`textmap`，id为hash，其它为文件名（不含后缀），
   */
  id: string;
  kind: GiSourceType;

  weight?: number;
}
