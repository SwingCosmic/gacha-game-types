# HSR

## 根级 / 跨语言

根级字典为各语言字典的多语言聚合，每条追加 `nameCHS` / `nameEN` / … 等字段（由 `HsrDictItem` 的 `name${string}` 索引签名描述）；其中 `elements` / `paths` / `properties` 同时按语言输出 `{lang}/` 下的单语言副本。

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `elements.json` | 属性字典 | `HsrDictItem[]` |
| `paths.json` | 命途字典 | `HsrDictItem[]` |
| `properties.json` | 面板属性字典 | `HsrDictItem<HsrProperty>[]` |
| `relictypes.json` | 遗器部位字典（同 `{lang}/relic/types.json` 数据） | `HsrRelicTypeDict[]` |
| `statuses.json` | 异常抗性字典（常用 `STAT_*` 异常子集，非全量状态表） | `HsrDictItem<IMetadataEntity>[]` |

## 语言目录：`{lang}/`

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/items.json` | 通用物品列表 | `HsrItemConfig[]` |
| `{lang}/statuses.json` | 战斗状态配置（全量状态表） | `HsrStatus[]` |
| `{lang}/textjoin.json` | 动态文本拼接配置 | `HsrTextJoin[]` |

## 角色 / 忆灵

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/avatars/index.json` | 角色列表 | `HsrGameAvatarSimple[]` |
| `{lang}/avatars/{id}.json` | 角色详情（含多个子表） | `HsrGameAvatar` |
| `{lang}/servants/index.json` | 忆灵列表 | `HsrGameServantSimple[]` |

## 光锥 / 遗器

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/lightcones/index.json` | 光锥列表 | `HsrLightcone[]` |
| `{lang}/relic/index.json` | 遗器部件列表 | `HsrRelic[]` |
| `{lang}/relic/sets.json` | 遗器套装 | `HsrRelicSet[]` |
| `{lang}/relic/types.json` | 遗器部位类型 | `HsrRelicType[]` |

## 敌人

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/monster/index.json` | 敌人模板列表 | `HsrMonsterTemplate[]` |
| `{lang}/monster/{id}.json` | 敌人模板详情（含子表） | `HsrMonsterTemplate` |
| `{lang}/monster/hardLevelGroup.json` | 等级曲线分组  | `HsrHardLevelGroupDict` |
| `{lang}/monster/eliteGroup.json` | 精英组战斗修正 | `HsrEliteGroupDict` |

## 智库 / 阅读物

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/databank/nouns.json` | 名词解释 | `HsrNounDesc[]` |
| `{lang}/databank/bookseries.json` | 书籍 | `HsrBookSeries[]` |
| `{lang}/databank/worlds.json` | 书籍所属地图（星球） | `HsrBookSeriesWorld[]` |

## 剧情任务

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/mission/worlds.json` | 剧情所属地图（星球） | `HsrWorldData[]` |
| `{lang}/mission/graph.json` | 主线任务关系图，含章节、任务和任务包 | `HsrMainMissionGraph` |
| `{lang}/mission/submission.json` | 子任务列表 | `HsrSubMission[]` |

## 演出与对话

演出（Performance）按来源表族拆分为 A / C / D / DS / E / Video 六类输出，`id` 与 `type` 构成复合主键；六类条目的联合类型为 `HsrPerformance`，官方回顾/回放文案与跳过标记以演出 ID 关联。

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/scenario/performance/index.json` | 全部演出的聚合最小索引，仅含 `id`、`type`、`path` | `HsrPerformanceIndex[]` |
| `{lang}/scenario/performance/a.json` | 演出表A | `HsrPerformanceA[]` |
| `{lang}/scenario/performance/c.json` | 演出表C | `HsrPerformanceC[]` |
| `{lang}/scenario/performance/d.json` | 演出表D | `HsrPerformanceD[]` |
| `{lang}/scenario/performance/ds.json` | 演出表DS（结构与 D 相同） | `HsrPerformanceDS[]` |
| `{lang}/scenario/performance/e.json` | 演出表E | `HsrPerformanceE[]` |
| `{lang}/scenario/performance/video.json` | 演出表Video（过场动画演出） | `HsrPerformanceVideo[]` |
| `{lang}/scenario/performance/skip-override.json` | 官方剧情回顾/跳过确认文案 | `HsrPerformanceSkipOverride[]` |
| `{lang}/scenario/performance/replay-override.json` | 官方回放文案 | `HsrPerformanceReplayOverride[]` |
| `{lang}/scenario/performance/skip-flag.json` | 演出跳过标记 | `HsrPerformanceSkipFlag[]` |
| `{lang}/scenario/talksentence.json` | 对话台词 | `HsrTalkSentence[]` |

## 逐光捡金（深渊挑战）

四种深渊挑战——忘却之庭/混沌回忆（maze）、虚构叙事（story）、末日幻影（boss）、异相仲裁（peak）——共享「期 → 层 → 节点 → 波次 → 敌人」结构，公共子类型（`HsrChallengeSeasonBase`、`HsrChallengeFloor`、`HsrChallengeNode` 等）位于 `src/games/hsr/challenge/index.ts`。

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/challenge/{mode}/index.json` | 期列表，不含 `floors` | `HsrChallengeMazeSeason[]` / `HsrChallengeStorySeason[]` / `HsrChallengeBossSeason[]` / `HsrChallengePeakSeason[]`（按 `{mode}` 对应） |
| `{lang}/challenge/{mode}/{seasonId}.json` | 单期完整数据（含 `floors`，明细拆分模式） | 同上对应 Season 类型 |

## 如我所书(δ-me13.exe)

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/tarotwiki/index.json` | 实验进程树，有三层结构 | `HsrTarotWikiTimeline[]` |
| `{lang}/tarotwiki/changes.json` | 解锁与变更条件 | `HsrTarotWikiUnlockCondition[]` |

## 差分宇宙

目前有3个赛季，部分表只在特定赛季可用，如S3乐园漫记。

| 相对路径 | 用途 | 入口类型 | 赛季 |
|----------|------|----------|------|
| `{lang}/rogue/tourn/index.json` | 赛季列表 | `HsrRogueTournSeason[]` | |
| `{lang}/rogue/tourn/miracles.json` | 奇物 | `HsrRogueMiracle[]`（`rogue/tourn`） | 跨赛季 |
| `{lang}/rogue/tourn/titans.json` | 泰坦 | `HsrRogueTitan[]`（`rogue/tourn2`） | S2 |
| `{lang}/rogue/tourn/roomcomptypes.json` | 房间类型 | `HsrRogueRoomCompType[]`（`rogue/tourn3`） | S3 |
| `{lang}/rogue/tourn/personas.json` | 面具 | `HsrRoguePersona[]`（`rogue/tourn3`） | S3 |
| `{lang}/rogue/tourn/personagifts.json` | 奇迹 | `HsrRoguePersonaGift[]`（`rogue/tourn3`） | S3 |
| `{lang}/rogue/tourn/roomattributes.json` | 信标 | `HsrRogueRoomAttribute[]`（`rogue/tourn3`） | S3 |
| `{lang}/rogue/tourn/events/index.json` | 事件图鉴入口，含 NPC 解锁关联 | `HsrRogueTournEvent[]` | 跨赛季 |

## 银河战力党

| 相对路径 | 用途 | 入口类型 |
|----------|------|----------|
| `{lang}/dicecombat/avatars.json` | 卡牌角色 | `HsrDiceAvatar[]` |
| `{lang}/dicecombat/cardpacks.json` | 卡包 | `HsrDiceCardPack[]` |
