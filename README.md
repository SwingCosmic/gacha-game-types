# gacha-game-types

主流角色抽卡二游的**处理后数据结构类型定义**。

本仓库**只包含 TypeScript 类型**，不内置游戏数据本体。实际 JSON 数据由外部仓库或 CDN 按约定路径提供，消费方按语言码与相对路径拉取即可。

> 当前已覆盖：HSR, GI。  
> 规划中：HI3, WUWA, BA, EF 等游戏。


本仓库**不包含**游戏内原始数据类型。

1. 游戏原始数据类型因相关法律问题不适合公开，或者根本无法获得准确类型
2. 游戏内原始类型结构往往复杂多变，充满混淆字段名，且表关系经常违反直觉，不适合作为数据处理层入口
3. 按照数据域重新组合并精简类型后，更容易加载和理清数据关系


---

## 包结构

```
src/
├── common/           # 跨游戏基础实体（如IMetadataEntity）
├── model/            # 跨游戏抽象模型（草案）
└── games/
    ├── hsr/          # HSR相关模型
    │   ├── mission/
    │   ├── quest/
    │   └── rogue/
    └── gi/           # GI（增量中）
```

TypeScript 路径别名（仓库内）：

```ts
"@game/*" → "src/*"
```

示例：

```ts
import type { HsrGameAvatar } from "@game/games/hsr/HsrGameAvatar";
import type { IMetadataEntity } from "@game/common/IEntity";
```

---

## 数据与类型的关系

| 层级 | 说明 |
|------|------|
| 本仓库 | 类型定义（接口 / 类型别名） |
| 外部数据源 | 多语言结构化 JSON（由提取流水线生成） |
| 消费方 | 以语言码为一级目录，按相对路径 `fetch` / 静态导入 JSON，并用本仓库类型标注 |

数据布局（相对某个「游戏数据根」）：

```
{dataRoot}/
├── elements.json等              # 跨语言静态字典和全局元数据
└── CHS/                        # 语言码，如 CHS / EN / JP
    ├── items.json              # 具体的数据文件
    ├── textjoin.json
    ├── avatars/
    ├── lightcones/
    ├── ...
```


---

## 数据存放路径说明

以下路径均为**相对数据根**的路径，例如CDN地址。不同游戏通常会使用不同的根路径前缀区分。 
其中`{lang}` 表示语言码；`{id}` 表示实体 ID。

## 各游戏类型清单

* [HSR](./docs/hsr.md)

## 使用方式

1. 将本包作为 monorepo workspace 依赖，或发布后通过 npm 安装。
2. 配置路径别名 `@game/*` → 本包 `src/*`（或构建产物路径）。
3. 从外部数据源按上表相对路径获取 JSON，并用对应类型标注。

```ts
import type { HsrGameAvatarSimple } from "@game/games/hsr/HsrGameAvatar";

// dataRoot 由消费方自行配置（本地目录 / CDN 前缀等）
const list = await fetch(`${dataRoot}/${lang}/avatars/index.json`)
  .then((r) => r.json()) as HsrGameAvatarSimple[];
```