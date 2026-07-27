import { HsrItem, HsrItemCost } from "../HsrItem";

export interface HsrDiceAvatarSimple extends HsrItem {
  path: string;
  /** 角色列表图标 */
  icon: string;
  /** 立绘 */
  portrait: string;
  portraitBg: string;
  portrait3D: string;
  portraitBg3D: string;

  hp: number;
  attackDiceNumber: number;
  defendDiceNumber: number;
  colorfulDiceNumber: number;
  /** 总共有多少种骰子（卡牌右上角显示） */
  diceSlotNumber: number;
  diceCounts: number[];
  diceIds: number[];

  isCollection: boolean;

  [key: string]: any;
}

export interface HsrDiceAvatarSkill {
  id: number;
  desc: string;
  params: number[];
}

export interface HsrDiceAvatar extends HsrDiceAvatarSimple {
  skill: HsrDiceAvatarSkill;
}

export interface HsrDiceCardPack {
  id: number;
  icon: string;
  order: number;
  name: string;
  goodIds: number[];
  goods: HsrDiceShopGood[];
};


export interface HsrDiceShopGood {
  id: number;
  itemId: number;
  cost: HsrItemCost[];
}