
export interface HsrTextMap {
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
  id: string;
}

export interface HsrTextMapAll {
  tags?: string[];
  lang: string;
  category?: Record<string, string>;
  text?: string;
  id: string;

  weight: number;
}
