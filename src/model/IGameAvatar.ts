
import { IMetadataEntity } from "@game/common/IEntity";
export interface IGameAvatar extends IMetadataEntity {
  /**
   * 角色稀有度
   * 为了跨作品比较，一般采用5级制，5代表最高初始稀有度（不含上限突破）并从高到低排。
   * 极少数超越5个稀有度的游戏允许有0.5级的间隔；有上限突破的继续往上加
   * 
   * 大多数游戏实际可从卡池抽到的角色稀有度只有2到3级，更低的稀有度未用到也留空。
   * 例如：
   * * 明日方舟和终末地的6星干员值为5
   * * 碧蓝档案的初始3星角色也为5
   */
  rarity: number;


  // 机制互动

  /**
   * 属性/元素/类型
   * 伤害机制和可知关系
   */
  attribute?: string;

  /**
   * 阵营/标签
   * 从属组织，并且拥有对应的特性；注意区分阵营和羁绊之间的差异
   */
  faction?: string;

  /**
   * 战术作用，即职业(class)或者职能原型(archetype)。
   * 
   * 不用class是因为含义过多
   */
  tacticalRole?: string;

  /**
   * 交互距离
   * 影响角色的攻击范围和形式
   */
  engagementRange?: string;

  /**
   * 站位
   * 影响角色的组队限制
   */
  position?: string;


  // 资源周转

  /**
   * 能量上限，通常用于大招
   */
  maxEnergy?: number;

  /**
   * 技能点上限，由全队共享
   */
  cost?: number;

  // 装备


}