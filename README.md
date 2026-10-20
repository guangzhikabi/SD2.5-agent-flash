# SD2.5 提示词助手 V6.17Flash

> 🌐 [中文](#sd25-提示词助手-v617flash) ｜ [English](#english-version)

**把剧本变成有镜头、有表演、有声音与连续性的 Seedance 视频提示词。**

不只写“电影感、情绪强烈、镜头推进”，而是进一步说明：摄影机在哪里、人物怎样动、台词怎么说、动作与对白如何同步，以及这一镜结束后留下什么状态。

这是运行在 **DeepSeek Harness（DSH）** 中的可选助手预设插件，包含核心规则、输出模板、7 份知识库和完整样例。安装后，在 DSH 新会话中选择本助手，即可通过对话完成剧本转写、分镜讨论、局部改镜和分镜表制作。

> **使用说明**：本助手负责编写提示词，不直接生成视频，也不提供视频生成额度或自动调用视频平台。生成的成稿需要你手动提交到支持相应提示词与素材参考的视频生成平台。安装本插件不会自动切换你的默认助手，也不会替换其他助手。

[快速开始](#快速开始) · [核心优势](#核心优势) · [四大工作模式](#四大工作模式) · [使用示例](#使用示例) · [工作区与保存规则](#工作区与保存规则) · [内置知识库](#内置知识库) · [安装与更新指南](#安装与更新指南) · [发布目录与版本边界](#发布目录与版本边界)

---

## 它是什么？

你可以把它理解为一个带有固定工作方法和参考库的 **AI 分镜顾问**：

- **剧本转提示词**：输入剧本、场次说明、大纲或已有分镜，帮你组织成可直接使用的视频提示词。
- **前期分镜讨论**：不确定镜头应该怎样设计时，先帮你分析不同方案的选择与代价，不急着直接输出成品。
- **先出表再展开**：想先确认分镜再生成提示词时，先输出标准九列分镜表，等你确认无误后再展开写成稿。
- **精准局部改镜**：已有成稿只想修改其中一镜时，自动检查前后镜头的承接关系，不会把整段无关内容推翻重写。

*(注：本插件不是视频生成模型、剪辑软件或独立聊天客户端；需要在 DSH 中配合你已配置的对话模型使用，模型的理解、文件操作和指令遵循能力会影响实际表现。)*

---

## 核心优势

普通提示词容易只写出“氛围”，却没有交代清楚具体的执行关系。本助手专门针对以下容易反复返工的痛点进行了规则设计：

| 常见痛点问题 | 本助手的处理方式 | 对使用者的实际帮助 |
| :--- | :--- | :--- |
| **镜头描述只有“电影感、特写、慢推”** | 分开说明机位、可见范围、画面焦点、受光与主要运镜 | 更容易检查镜头想表达什么，而不是堆砌摄影术语 |
| **动作和台词像两套独立流程** | 将表演、动作、对白和反应写入同一个“连续表演”事件，区分同步、先后与打断 | 减少“说完才动、动完才说”的机械木偶感编排 |
| **台词被改写，或切镜后又重说一遍** | 严格保留用户原句并指定唯一发声者，跨镜说明续接，不重新起句 | 高度契合需要忠实还原剧本台词的任务 |
| **切镜后站位、道具、动作状态全变了** | 自动继承人物身份、位置、道具持有和动作相位，镜尾强制记录影响下一镜的状态 | 方便直观检查前后镜头是否严丝合缝地衔接 |
| **只写“愤怒地说”，缺乏具体表演** | 把抽象情绪落实为当前景别下可见、可听的动作质感与说话方式 | 让表演要求具体可执行，告别空洞的情绪标签 |
| **一段提示词越写越长，超出限制** | 按所有 PART 合计 6500 Unicode 字符的上限组织与压缩，优先保护台词、剧情和必要字段 | 提供明确的精简优先级，绝不靠删减剧情来凑字数 |
| **想改一点，却牵动了整段内容** | 局部修改后，专门复核上下镜的时间、站位、道具、声音和情绪承接 | 避免“只改局部、却在后续镜头留下穿帮矛盾”的情况 |

### ⚡ V6.17Flash 的“精简”体现在哪里？

在生成正式提示词（A 模式）时，每个镜头固定保留 **7 个核心标题**：

> **景别/机位 → 画面层次与焦点 → 光线与受光 → 运镜 → 连续表演 → 声音 → 结束状态**

- **合并同类项**：将人物情绪、动作质感、发声方式、完整台词与必要的听者反应，统一整合在 **“连续表演”** 字段中，不再单独设立“人物情绪表演”栏。这样可以把同一件事写在一起，大幅减少分栏造成的重复赘述。
- **不减核心质量**：Flash 精简的只是字段组织形式，**绝不会把台词、动作因果和镜头连续性省掉**。

---

## 四大工作模式

日常使用时**不需要背诵模式字母**，直接用自然语言告诉助手你的需求即可：

| 模式 | 适用场景与日常说法示例 | 助手的交付方式 |
| :--- | :--- | :--- |
| **A：提示词模式** | “把这场戏直接转成提示词” | 按主模板输出完整的多镜头 PART 提示词并保存 |
| **B：商量／审查模式** | “这段节奏为什么不顺？”、“这里用固定镜还是手持更合适？” | 分析问题原因、不同方案的选择与代价，不强行输出成稿 |
| **C：局部改镜模式** | “只改第二镜，其他已确认内容不动” | 仅修改受影响的镜头内容，同步检查前后镜承接并更新文件 |
| **D：分镜表模式** | “先给我出分镜表，等我确认后再展开写提示词” | 输出固定九列分镜表；按要求停下等待确认，确认后再转成提示词 |

---

## 快速开始

### 1. 安装到 DSH
1. 下载本仓库 ZIP 或 Release 压缩包，**先完整解压到本地固定目录**。
2. 在 DSH 中打开该解压目录，直接对具备插件管理权限的 AI 发送以下话术，让其读取 [给AI的安装指令](给AI的安装指令.md) 自动完成安装：

```text
请读取当前目录的《给AI的安装指令.md》，按说明安装 V6.17Flash。
只新增可选助手，不修改我当前的默认助手。
```

*(注：完整安装包含“准备资产”和“DSH 插件管理注册”两步，仅运行完准备程序还不算安装完成，需等待 AI 完成插件注册汇报。)*

### 2. 开启新会话并选择助手
安装完成后，根据 DSH 提示决定是否重启客户端。随后**开启一个新会话**（已打开的旧会话不会自动切换助手），在预设列表中手动选择：

👉 **`SD2.5提示词助手_V6.17Flash`**

### 3. 准备文件并发起任务
建议在你的任务工作区放好剧本、说明文档以及需要用到的参考素材。发指令时，尽量向助手交代清楚以下要素：
- **集数与场次**：例如“第 3 集第 2 场”，便于助手确定文件归档位置。
- **交付方式**：说明是直接成稿、先讨论方案、先看九列分镜表，还是局部改镜。
- **时长与锁定要求**：例如“总长 15 秒”，以及必须保留的镜头顺序或关键动作结果。
- **台词要求**：说明原始台词是否必须逐字保留。
- **素材用途**：指明工作区里哪个文件对应哪个角色、参考面部还是服装、哪段音频只取音色。

*(不必担心一次没写全所有细节：凡是影响剧情或素材对应的关键缺口，助手会主动先向你提问确认；不改变剧情的普通执行细节，助手会按规则做最小化合理补全。)*

---

## 使用示例（可直接复制套用）

### 示例一：直接把剧本转成提示词（无外部素材）
```text
第3集第2场，总时长15秒，直接输出提示词。

办公室里，林舟站在桌旁，把信封放到桌上，压低声音说：
“合同我看过了。”
许宁坐在桌后，没有接信封，只抬眼看他。

台词逐字保留，不增加对白，不改变动作结果。
工作区没有参考图片和音频，以文字设定为准。
```
> **执行逻辑**：助手会先确认任务工作区与集文件夹，按七字段模板组织镜头，核对台词、时长和动作关系，最后按规则保存成稿（无外部素材时绝不虚构图片或音频编号）。

### 示例二：先看九列分镜表，确认后再展开
**第一步（发任务要分镜）：**
```text
把这场戏先做成九列分镜表，等我确认后再写提示词。
总时长20秒，保留全部台词，不新增人物。
```
**第二步（确认分镜后要求成稿）：**
```text
按刚才确认的镜序、台词和时长展开成提示词，不改变剧情。
```

### 示例三：只修改其中一镜（局部返修）
```text
只改第二镜：把慢推改为固定镜，人物动作和台词不变。
检查与第一、第三镜的站位、道具持有和声音承接。
其他已确认内容不要重写。
```

### 示例四：绑定人物图、场景图与音色参考
```text
工作区的“林舟 西装.png”对应林舟，只参考面部与服装；
“办公室.png”作为场景参考；
“林舟 音色.wav”只参考林舟的声音音色。
默认不打开图片和音频，不从文件名猜外貌。
按本次实际上传顺序给素材编号，先汇报绑定关系再成稿。
```
> **生成的绑定格式示意**：
> ```text
> 图1@办公室 绑定为办公室场景参考。
> 图2@林舟 西装 绑定为林舟，面部与服装参考。
> 将音频1@林舟 音色 绑定为林舟的声音音色，只取音色，不继承原台词、背景音乐与背景声。
> ```
> **⚠️ 重要提醒**：助手写出绑定语句不等于自动帮你把素材传到了视频平台。实际生成视频时，你仍需在视频平台手动上传对应文件，并确保**上传顺序与提示词里的编号（图1、图2、音频1）严格一致**。

---

## 工作区与保存规则

### 1. 素材处理：默认只认文件名，不擅自看图听音
- **扫描机制**：助手开工时会扫描任务工作区，自动识别剧本文档以及图片、音频、视频文件。
- **隐私与准确性**：剧本文档和说明文档会正常读取；但**图片、音频、视频默认绝不自动打开**（只有当你明确下令要求查看某个媒体文件时才会打开）。人物外貌特征严格依据剧本、你的说明或已确认的绑定信息编写，绝不凭文件名看字生义、盲目编造。

### 2. 声音与文字边界：保留真实同期声，杜绝乱加配乐字幕
- **默认保留项**：角色对白、符合当前场景的自然环境底声、有明确动作来源的真实拟音（以及剧情内真实的道具文字、场景内画外角色对白）。
- **默认禁止项**：默认不加 BGM、配乐、转场音效、情绪强调音或无来源装饰音；默认不自动添加旁白、对白字幕和人物姓名标签。
- **灵活覆盖**：如果你在某场戏中明确要求加入音乐、字幕、旁白或全静音，助手会按你的要求同步调整允许与禁止范围。

### 3. 自动归档保存：按“集 / 场次 / PART”规范存放
A 模式（正式成稿）与 C 模式（局部改镜）默认按以下目录结构自动保存，每个独立 PART 单独存为一个 `.txt` 文件（D 模式分镜表默认不自动保存文件）：

```text
任务工作区/
└─ EP3/
   ├─ EP3-2-Part1.txt
   └─ EP3-2-Part2.txt
```
- 集数或场次不明确时，助手会先向你询问；工作区已有集文件夹（如 `EP3`）时会直接沿用原命名写法，不会擅自补零改成 `EP03`。
- A 模式遇到同名文件会先提醒你确认，C 模式改镜会直接更新对应文件，绝不擅自删除工作区内的其他项目文件。

### 4. 个人偏好设置：记住你的长期习惯
个人偏好与核心知识库独立存放，你可以将自己的长期习惯写入个人偏好中：
- 常用的单段目标时长、画面风格偏好与汇报习惯。
- 是否默认每次都先做九列分镜表。
- 是否开启自动保存、项目中的固定角色/场景名称与素材编号习惯。

> **生效优先级**：`你当次对话的明确要求` ＞ `个人偏好设置` ＞ `系统默认偏好`。新安装时默认使用纯净模板（不带发布者的私人习惯）；版本更新时会原样保留你已有的个人偏好设置。

---

## 内置知识库

本插件内置 7 份核心专业知识库（配合核心预设、唯一输出模板与完整样例使用），助手在运行时会根据当前任务按需检索，无需每次全量读取：

| 文件编号 | 知识库名称 | 主要用途说明 |
| :---: | :--- | :--- |
| **01** | **规则与参数** | 定义输出格式、参数限制、内部规则条目与不可逾越的红线 |
| **13** | **镜头卡样本库** | 提供单镜头的标准组织骨架参考 |
| **14** | **场景原型与镜组套路** | 根据具体空间与戏剧事件，匹配合适的镜头组合套路 |
| **15** | **情绪与动作词表** | 将抽象的情绪、动作和说话方式，转化为画面可见、声音可听的具体描述 |
| **16** | **常见失败案例库** | 针对视频生成中的高频翻车风险进行定位、排查与核对 |
| **17** | **机位轴线与对话机制** | 规范视点选择、人物空间关系与多人对话调度，防止越轴混乱 |
| **18** | **运镜光线与转场机制** | 指导摄影机运动、光线受光承接及镜头转场方式的选择 |

---

## 安装与更新指南（管理员与技术参考）

普通用户直接按上文 [快速开始](#1-安装到-dsh) 让 DSH 里的 AI 读取 [给AI的安装指令](给AI的安装指令.md) 即可完成操作。以下为底层安装机制与更新边界，供自行维护环境的使用者参考：

1. **运行环境要求**：
   - 宿主环境需为具备 `agent-preset`、`persona`、文件、检索、技能及相关内置工具插件的 DSH，并由使用者自行配置好可用的对话模型。
   - `Node.js 18+` 仅在首次安装或更新的“一次性资产准备阶段”使用，日常成稿与计数不会调用外部脚本或进程。
2. **资产准备命令**：
   - 在解压目录下运行 `node 安装准备.mjs --apply` 执行实际写入（若不带 `--apply` 参数则仅作只读预览）。
   - 若目标环境已安装过本版本，在取得更新确认后需加上 `--update` 参数运行。
3. **目标目录规则**：
   - 默认读取环境变量 `DSH_HOME`，若未设置则使用当前系统用户目录下的 `.dsh` 文件夹。
   - 多配置环境或便携版部署，请使用 `--home` 参数显式指定目标数据目录。
4. **插件注册流程**：
   - 资产准备完成后，由 DSH 的 `plugin_manager` 注册准备程序返回的 `bundle` 目录，并检查 `application` 状态、诊断信息与重启要求。
   - **切勿直接注册尚未经过准备程序替换路径占位符的原始下载文件夹**。
5. **版本更新与旧版迁移**：
   - **同版本更新**：自动保留个人偏好与用户自建文件，并在覆盖前将旧目录完整备份至目标数据目录的 `_backups/sd25-v617flash/时间戳` 下。
   - **从旧版迁移**：显式添加 `--update` 参数时，程序会按语义版本自动寻找旧版 Flash 的个人偏好进行迁移（自动排除 Pro 版、`.bak` 备份文件及未来版本）；普通全新安装则不会自动继承旧版偏好。
6. **安全回退与卸载**：
   - 本插件在安装、更新或回退时，绝不直接写入修改用户的 `profile` 配置文件，不改写默认助手选择，也不删除其他助手或项目文件。
   - 若需回退版本，请先通过 DSH 插件管理器禁用或注销本 bundle，随后恢复 `_backups` 中的备份文件并重新注册原版本。卸载插件不会自动删除你的个人偏好与历史备份。

---

## 发布目录与版本边界

### 📁 发布包文件目录
- [给AI的安装指令](给AI的安装指令.md)：供 AI 读取执行的自动化安装、更新与回退标准步骤。
- [安装准备程序](安装准备.mjs)：负责安装阶段的完整性校验、便携路径适配、备份与偏好继承。
- [完整性清单](文件校验.json)：记录发布包内各文件的字节数与 SHA256 校验值。
- [插件声明](payload/sd25-v617flash/bundle/cordis.patch.yml)：DSH 插件配置文件（仅声明本助手，不篡改默认助手）。
- [技能入口](payload/sd25-v617flash/skills/sd25-v617flash-prompt/SKILL.md)：助手运行时的核心检索与制作指引。
- [知识库索引](payload/sd25-v617flash/skills/sd25-v617flash-prompt/references/v6.17flash/INDEX.md)：内置知识库的文档与条目定位索引。
- [个人偏好默认模板](templates/我的偏好.默认模板.md)：全新安装时初始化的默认个人偏好层模板。

### 📌 版本与使用边界说明
- **当前版本**：助手内核版本 **V6.17Flash** ｜ 插件分发包版本 **1.0.1**（核心规则、模板和知识库原文保持不变；分发层已适配便携路径，并取消了技能入口中强制调用外部计数命令的要求）。
- **字符数上限**：单次交付的所有 PART 合计上限为 **6500 Unicode 字符**（含空格与换行）。当宿主环境没有无需额外授权的精确计数工具时，助手会自动预留明显余量，不会虚报精确字数。
- **生成效果说明**：本助手的规则旨在让提示词逻辑严密、连续无歧义，但提示词本身无法保证视频生成端 100% 精确命中时码、复杂动作、口型同步或绝对无字幕/无 BGM，关键镜头仍需结合实际视频生成结果进行测试与微调。

---

## 许可与使用边界

本项目采用 **[使用许可 v2.3](LICENSE)**（中英对照，中文正文为准）。**它不是开源软件**：本许可是专有许可，仅授予许可文件明文规定的权利。

- ✅ **自由创作**：下载安装后不限设备、份数、地域与用途地使用本助手；**生成产物可自由使用，含商业用途**——接单、付费交付、课程、作品集均**无需发布者同意、付费或分成**（第二条、第四条）。
- ✅ **可改本地副本**：修改自己安装的副本供自己使用，包括用于自己的商业项目（第二条第 1 款第 3 项）。
- ❌ **不得再分发**：不发布修改过的版本，也不转发 / 上传原版给任何人（同事、群聊、网盘、自有仓库、镜像站）；多人使用请各自自公开渠道下载（第三条）。
- ❌ **商业嵌入须事先书面授权**：将助手本体打包进对外销售的产品 / 课程 / SaaS、做成在线服务或 API、对外收费提供提示词或分镜服务、以其为核心卖点宣传，均须事先书面许可（第三条、第八条）。
- 📄 **分界线**：本许可限制**助手本体**的分发与商业嵌入，**不限制使用者创作之内容**（第三条判定口径、第四条）。
- 🔐 安装准备程序对发布包执行 SHA256 校验，以确保安装到官方版本（LICENSE 属法律文本，不参与校验）。

---

# English Version

## SD2.5 Prompt Assistant V6.17Flash

**Turn a script into Seedance video prompts that carry shots, performance, sound, and continuity.**

Instead of stopping at "cinematic, emotionally intense, slow push-in", it spells out where the camera stands, how the characters move, how a line is actually delivered, how action and dialogue sync up, and what state is left behind when a shot ends.

This is an optional assistant preset plugin for **DeepSeek Harness (DSH)**, bundling the core rule set, the output template, 7 knowledge bases, and complete worked examples. Once installed, pick this preset in a new DSH session and handle script-to-prompt conversion, shot-design discussion, surgical shot revisions, and storyboard tables through plain conversation.

> **Usage note**: this assistant writes prompts. It does not generate video, hand out generation credits, or call a video platform for you. Finished prompts are meant to be submitted by hand to a video generation platform that accepts these prompts and reference assets. Installing this plugin never switches your default assistant and never replaces another assistant.

[Quick start](#quick-start) · [Core advantages](#core-advantages) · [Four working modes](#four-working-modes) · [Usage examples](#usage-examples) · [Workspace and saving rules](#workspace-and-saving-rules) · [Built-in knowledge bases](#built-in-knowledge-bases) · [Installation and update guide](#installation-and-update-guide) · [Release layout and version boundaries](#release-layout-and-version-boundaries)

---

## What is it?

Think of it as an **AI storyboard consultant** that ships with a fixed working method and a reference library:

- **Script to prompts**: feed in a script, scene notes, an outline, or an existing storyboard, and get back video prompts you can use directly.
- **Pre-production shot discussion**: when you are unsure how a shot should be designed, it first lays out the options and their trade-offs instead of rushing into a finished draft.
- **Table first, expand later**: if you want to approve the storyboard before generating prompts, it produces the standard nine-column storyboard table and waits for your approval before writing the full draft.
- **Surgical shot revision**: when only one shot of an existing draft needs to change, it automatically re-checks the hand-off with the neighbouring shots instead of rewriting unrelated content.

*(Note: this plugin is not a video generation model, an editing application, or a standalone chat client. It runs inside DSH alongside a chat model you have configured, and the model's comprehension, file handling, and instruction-following ability will affect real results.)*

---

## Core advantages

Ordinary prompts tend to describe "mood" while leaving the concrete execution relationships unstated. This assistant's rules are designed around the pain points that most often send a shot back for another round:

| Common pain point | How this assistant handles it | What you actually get |
| :--- | :--- | :--- |
| **Shot description is only "cinematic, close-up, slow push-in"** | Camera position, visible frame, focus point, light coverage, and primary camera move are described separately | You can check what a shot is meant to express instead of reading a pile of photography jargon |
| **Action and dialogue behave like two separate pipelines** | Performance, action, dialogue, and reactions go into one "continuous performance" event, with sync, sequence, and interruption made explicit | Fewer puppet-like "move, then speak" / "speak, then move" arrangements |
| **Lines get reworded, or repeated after a cut** | Your original lines are preserved verbatim with a single designated speaker, and cross-shot dialogue is marked as a continuation rather than restarted | A good fit for work that must reproduce scripted dialogue faithfully |
| **Blocking, props, and action state reset after every cut** | Character identity, position, prop possession, and action phase are inherited automatically, and each shot must record the state that affects the next one | Easy visual checking of whether consecutive shots actually match |
| **Only "says angrily", with no concrete performance** | Abstract emotion is converted into action quality and delivery that are visible and audible at that shot size | Performance directions become executable instead of empty emotional labels |
| **The prompt keeps growing past the limit** | Organised and compressed against a 6500 Unicode character cap summed across all PARTs, protecting dialogue, story, and required fields first | A clear cutting order that never buys characters by deleting story |
| **One small edit drags the whole passage along** | After a local change, timing, blocking, props, sound, and emotional hand-offs in the surrounding shots are re-verified | No more "fixed one shot, broke the next two" |

### ⚡ Where does the "streamlined" part of V6.17Flash show up?

When producing a finished prompt (Mode A), every shot keeps **7 core headings**:

> **Shot size / camera position → layers and focus → light and coverage → camera move → continuous performance → sound → ending state**

- **Merging like with like**: character emotion, action quality, delivery, the full line, and any necessary listener reaction are consolidated into the **"continuous performance"** field, so no separate "character emotional performance" column exists. One event is written in one place, which cuts a large amount of column-induced repetition.
- **No loss of core quality**: Flash streamlines the field organisation only. **Dialogue, action causality, and shot continuity are never dropped.**

---

## Four working modes

In daily use you **do not need to memorise mode letters** — just state your request in plain language:

| Mode | When to use it, with everyday phrasing | What the assistant delivers |
| :--- | :--- | :--- |
| **A: Prompt mode** | "Turn this scene into prompts directly" | Full multi-shot PART prompts from the main template, saved to disk |
| **B: Discuss / review mode** | "Why does this pacing feel off?", "Would a locked-off shot work better than handheld here?" | Cause analysis plus options and trade-offs, without forcing a finished draft |
| **C: Shot revision mode** | "Change only shot 2, leave everything already approved alone" | Only the affected shot is rewritten, with cross-shot hand-offs re-checked and the file updated |
| **D: Storyboard table mode** | "Give me the storyboard table first, expand into prompts after I approve" | The fixed nine-column storyboard table; it stops for your confirmation and converts to prompts afterwards |

---

## Quick start

### 1. Install into DSH

1. Download the repository ZIP or the Release archive and **fully extract it to a permanent local directory first**.
2. In DSH, open that extracted directory and send the message below to an AI that has plugin-management permission, so it reads [给AI的安装指令](给AI的安装指令.md) and completes the installation automatically:

```text
请读取当前目录的《给AI的安装指令.md》，按说明安装 V6.17Flash。
只新增可选助手，不修改我当前的默认助手。
```

*(Note: a full installation has two stages — "asset preparation" and "DSH plugin registration". Finishing the preparation program alone does not mean installation is complete; wait until the AI reports the plugin registration result.)*

### 2. Start a new session and select the assistant

After installation, follow DSH's prompt about restarting the client if needed. Then **start a new session** (an already-open session will not switch assistants) and pick this entry from the preset list:

👉 **`SD2.5提示词助手_V6.17Flash`**

### 3. Prepare files and send the task

Put the script, notes, and any reference assets you need into your task workspace. When you send instructions, cover as many of these points as you can:

- **Episode and scene**: e.g. "episode 3, scene 2", so the assistant knows where to archive files.
- **Delivery style**: finish the draft directly, discuss options first, show the nine-column table first, or revise one shot.
- **Duration and locked requirements**: e.g. "15 seconds total", plus any shot order or action outcome that must be preserved.
- **Dialogue requirements**: state whether the original lines must be kept word for word.
- **Asset purpose**: which file maps to which character, whether the face or the wardrobe is the reference, and which audio should contribute timbre only.

*(You do not have to get every detail right in one message: the assistant will proactively ask about gaps that would affect story or asset mapping, and will make minimal, reasonable completions for ordinary execution details that do not change the story.)*

---

## Usage examples (copy and adapt)

### Example 1: convert a script directly (no external assets)

```text
第3集第2场，总时长15秒，直接输出提示词。

办公室里，林舟站在桌旁，把信封放到桌上，压低声音说：
“合同我看过了。”
许宁坐在桌后，没有接信封，只抬眼看他。

台词逐字保留，不增加对白，不改变动作结果。
工作区没有参考图片和音频，以文字设定为准。
```

> **What happens**: the assistant confirms the task workspace and episode folder, organises the shots against the seven-field template, checks dialogue, duration, and action relationships, and finally saves the draft by rule (with no external assets present, it never invents image or audio index numbers).

### Example 2: storyboard table first, expansion after approval

**Step one (ask for the table):**
```text
把这场戏先做成九列分镜表，等我确认后再写提示词。
总时长20秒，保留全部台词，不新增人物。
```

**Step two (after approving the table):**
```text
按刚才确认的镜序、台词和时长展开成提示词，不改变剧情。
```

### Example 3: revise a single shot (local rework)

```text
只改第二镜：把慢推改为固定镜，人物动作和台词不变。
检查与第一、第三镜的站位、道具持有和声音承接。
其他已确认内容不要重写。
```

### Example 4: bind character images, a scene image, and a voice reference

```text
工作区的“林舟 西装.png”对应林舟，只参考面部与服装；
“办公室.png”作为场景参考；
“林舟 音色.wav”只参考林舟的声音音色。
默认不打开图片和音频，不从文件名猜外貌。
按本次实际上传顺序给素材编号，先汇报绑定关系再成稿。
```

> **What the resulting binding lines look like:**
> ```text
> 图1@办公室 绑定为办公室场景参考。
> 图2@林舟 西装 绑定为林舟，面部与服装参考。
> 将音频1@林舟 音色 绑定为林舟的声音音色，只取音色，不继承原台词、背景音乐与背景声。
> ```
> **⚠️ Important**: the assistant writing these binding lines does not upload anything to your video platform. When you actually generate video, upload the matching files manually and make sure **the upload order matches the numbering in the prompt (image 1, image 2, audio 1) exactly**.

---

## Workspace and saving rules

### 1. Asset handling: file names only by default, no peeking at images or audio

- **Scanning**: at the start of a task the assistant scans the workspace and identifies the script document plus any image, audio, and video files.
- **Privacy and accuracy**: scripts and notes are read normally, but **images, audio, and video are never opened automatically** — only when you explicitly ask it to look at a specific media file. Character appearance is written strictly from the script, your instructions, or already-confirmed bindings, never guessed from a file name.

### 2. Sound and text boundaries: keep real production sound, never add score or captions on a whim

- **Kept by default**: character dialogue, natural ambient sound that fits the scene, real foley with an identifiable on-screen source (plus genuinely in-story prop text and off-screen character dialogue inside the scene).
- **Excluded by default**: no BGM, no score, no transition stingers, no emotional emphasis sounds, no source-less decorative effects; no automatic narration, no dialogue subtitles, and no character name labels.
- **Overridable**: if you explicitly ask for music, subtitles, narration, or full silence in a scene, the assistant adjusts both the allowed and the forbidden list accordingly.

### 3. Automatic archiving: stored by episode / scene / PART

Mode A (finished prompts) and Mode C (shot revision) save by the structure below, with each independent PART stored as its own `.txt` file (Mode D storyboard tables are not saved automatically):

```text
task workspace/
└─ EP3/
   ├─ EP3-2-Part1.txt
   └─ EP3-2-Part2.txt
```

- If the episode or scene is unclear, the assistant asks first; if an episode folder such as `EP3` already exists, its existing naming style is reused and it will not silently rewrite it as `EP03`.
- In Mode A a same-named file triggers a confirmation prompt; in Mode C the matching file is updated directly. Other project files in the workspace are never deleted.

### 4. Personal preferences: your long-term habits are remembered

Personal preferences live separately from the core knowledge bases, so you can record your own standing habits there:

- Preferred target length per segment, visual style preferences, and reporting habits.
- Whether to always produce the nine-column storyboard table first.
- Whether automatic saving is on, plus fixed character/scene names and asset numbering habits for a project.

> **Precedence**: `explicit instructions in the current conversation` > `personal preferences` > `system defaults`. A fresh installation starts from a clean template with no publisher habits baked in, and your existing personal preferences are preserved byte for byte across updates.

---

## Built-in knowledge bases

The plugin ships with 7 core knowledge bases (used together with the core preset, the single output template, and the complete examples). At runtime the assistant retrieves from them on demand instead of loading everything each time:

| No. | Knowledge base | Main purpose |
| :---: | :--- | :--- |
| **01** | **Rules and parameters** | Defines output format, parameter limits, internal rule items, and hard red lines |
| **13** | **Shot card samples** | Standard structural skeletons for organising a single shot |
| **14** | **Scene archetypes and shot-group patterns** | Matches a suitable shot-group pattern to a given space and dramatic event |
| **15** | **Emotion and action vocabulary** | Converts abstract emotion, action, and delivery into visible and audible descriptions |
| **16** | **Common failure cases** | Locates, diagnoses, and checks the high-frequency failure risks of video generation |
| **17** | **Camera axis and dialogue mechanics** | Governs viewpoint choice, spatial relationships between characters, and multi-person dialogue staging to avoid crossing the line |
| **18** | **Camera movement, lighting, and transitions** | Guides camera motion, light and coverage continuity, and choices of shot transition |

---

## Installation and update guide (for administrators and technical readers)

Regular users can simply follow [Quick start](#quick-start) above and let the AI inside DSH read [给AI的安装指令](给AI的安装指令.md). The following describes the underlying installation mechanics and update boundaries for those maintaining their own environment:

1. **Requirements**:
   - The host must be a DSH build that provides `agent-preset`, `persona`, file, retrieval, skill, and related built-in tool plugins, with a working chat model configured by you.
   - `Node.js 18+` is used only during the one-off asset preparation stage of an install or update; day-to-day drafting and character counting never invoke external scripts or processes.
2. **Asset preparation command**:
   - Run `node 安装准备.mjs --apply` in the extracted directory to perform the actual writes (without `--apply` it is a read-only preview).
   - If this version is already installed in the target environment, add `--update` after obtaining update confirmation.
3. **Target directory rules**:
   - The `DSH_HOME` environment variable is read first; if unset, the `.dsh` folder under the current user directory is used.
   - For multi-config or portable deployments, pass `--home` to specify the target data directory explicitly.
4. **Plugin registration flow**:
   - After asset preparation, have DSH's `plugin_manager` register the `bundle` directory returned by the preparation program, then check the `application` state, diagnostics, and restart requirements.
   - **Never register the raw downloaded folder** whose path placeholders have not been substituted by the preparation program.
5. **Version updates and migrating from an older release**:
   - **Same-version update**: personal preferences and user-created files are preserved automatically, and the previous directory is fully backed up to `_backups/sd25-v617flash/<timestamp>` under the target data directory before being overwritten.
   - **Migration from an older release**: when `--update` is passed explicitly, the program locates older Flash personal preferences by semantic version and migrates them (excluding the Pro edition, `.bak` backups, and future versions). A plain fresh install does not inherit older preferences automatically.
6. **Safe rollback and uninstall**:
   - During install, update, or rollback the plugin never writes to your `profile` configuration, never rewrites your default assistant selection, and never deletes other assistants or project files.
   - To roll back, first disable or unregister this bundle in the DSH plugin manager, then restore the backup from `_backups` and re-register the original version. Uninstalling does not delete your personal preferences or historical backups.

---

## Release layout and version boundaries

### 📁 Files in the release package
- [给AI的安装指令](给AI的安装指令.md): the standard automated install, update, and rollback steps an AI reads and executes.
- [安装准备](安装准备.mjs): integrity checks, portable path adaptation, backup, and preference inheritance during installation.
- [文件校验](文件校验.json): byte sizes and SHA256 checksums for every file in the package.
- [插件声明](payload/sd25-v617flash/bundle/cordis.patch.yml): the DSH plugin configuration file (declares this assistant only, never tampers with the default assistant).
- [技能入口](payload/sd25-v617flash/skills/sd25-v617flash-prompt/SKILL.md): the core retrieval and production guide used at runtime.
- [知识库索引](payload/sd25-v617flash/skills/sd25-v617flash-prompt/references/v6.17flash/INDEX.md): index of the bundled knowledge bases and item locations.
- [个人偏好默认模板](templates/我的偏好.默认模板.md): the default personal preference template initialised on a fresh install.

### 📌 Version and scope notes
- **Current version**: assistant core **V6.17Flash** | plugin distribution **1.0.1** (core rules, templates, and knowledge base text are unchanged; the distribution layer now supports portable paths and no longer requires the skill entry to call an external counting command).
- **Character cap**: all PARTs of a single delivery combined must stay within **6500 Unicode characters** (including spaces and line breaks). When the host offers no precise counting tool that needs no extra authorisation, the assistant leaves a clear margin instead of claiming an exact figure.
- **On results**: these rules are meant to make prompts logically tight and unambiguous from shot to shot, but no prompt can guarantee that a video generator hits timing, complex action, lip sync, or a total absence of subtitles/BGM 100% of the time. Key shots still need testing and fine-tuning against real generation output.

---

## License and usage boundaries

This project is released under the **[Use License v2.3](LICENSE)** (bilingual; the Chinese text controls). **It is not open-source software**: this is a proprietary licence granting only the rights expressly set out in the licence text.

- ✅ **Create freely**: use the assistant without limits as to devices, copies, territory or purpose; **the Generated Outputs are freely usable, including commercially** — paid commissions, client delivery, courses and portfolios need **no consent, no fee, no revenue share** (Articles 2 and 4).
- ✅ **Modify your local copy**: edit the copy you installed for your own use, including in your own commercial projects (Article 2.1(3)).
- ❌ **No redistribution**: do not publish a modified version, and do not forward or upload the original to anyone (colleagues, chat groups, drives, your own repository, mirrors); everyone else should obtain it from a public channel themselves (Article 3).
- ❌ **Commercial integration needs prior written consent**: bundling the assistant into a product, course or SaaS you sell; exposing it as an online service or API; charging for prompt or storyboard services built around it; making it a headline selling point (Articles 3 and 8).
- 📄 **Where the line is**: the Licence restricts redistribution and commercial integration of **the assistant itself**; it does **not** restrict the content you create (Article 3.2, Article 4).
- 🔐 The install-preparation program verifies SHA256 checksums of the release package so you install the official version (the LICENSE, being legal text, is not checksummed).