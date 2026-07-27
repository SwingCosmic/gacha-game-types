export interface HsrTextJoinItem {
  id: number;
  text: string;
}

export interface HsrTextJoin {
  id: number;
  defaultItemId: number;
  isOverride: boolean;
  type: string | null;
  items: HsrTextJoinItem[];
}
