# Repository Guidelines

## 项目概览

`horon-cv` 是一个个人 Nuxt 4/Vue 3 单页简历项目。同一次部署可以提供多个岗位版本：默认展示 DevOps 简历，其他版本通过 `?resume=<id>` 选择。项目经历在多个简历间复用，个人技能和证书则按岗位独立维护。

## 架构与数据流

- `app/app.vue` 是应用入口和页面渲染器。
- `route.query.resume` 先经过 `isResumeId` 校验；参数缺失或无效时回退到 `DEFAULT_RESUME_ID`。
- `selectedResume` 从 `resumeCatalog` 解析当前岗位配置，并渲染岗位标题、技能、项目和证书。
- `ResumeSwitcher.vue` 发出简历 ID；`app.vue` 使用 `navigateTo(..., { replace: true })` 更新 URL，同时保留其他查询参数。路由变化后，页面内容和 SEO 元数据会响应式更新。
- 数据归属必须保持清晰：
  - 共享个人信息、联系方式和教育经历：`app/app.vue` 及公开运行时配置。
  - 岗位专属技能、项目顺序和证书：`app/data/resumes.ts` 中的 `resumeCatalog`。
  - 共享项目正文和技术栈：同一文件中的 `projectCatalog`。
- 项目没有 API、数据库、依赖注入容器或全局状态仓库。除非需求确实变化，否则状态应继续由 URL 驱动，并使用局部状态或计算属性。

## 关键目录

- `app/components/` — 展示型 Vue 组件，包括 `ResumeSwitcher`、`Project` 和信息展示基础组件。
- `app/data/` — 类型化的简历和共享项目定义，是主要内容编辑入口。
- `app/utils/` — 链接格式化及技术栈到图标的映射。
- `app/assets/` — 全局 SCSS 和打包资源。
- `public/icons/` — Nuxt Icon 自定义 SVG 集合，对应 `custom:*`。
- `public/img/` — 公共图片资源；当前头像模板已被注释禁用。

`.nuxt/`、`.output/` 等生成目录不是源码，不得直接编辑。

## 开发命令

使用 `package.json` 中定义的脚本：

```bash
pnpm install       # 安装依赖；postinstall 会执行 `nuxt prepare`
pnpm dev           # 启动本地 Nuxt 开发服务器
pnpm build         # 生产构建
pnpm generate      # 生成静态产物
pnpm preview       # 预览生成或生产产物
```

项目已安装 ESLint 和 Stylelint，但没有对应的 package script。需要时直接执行：

```bash
pnpm exec eslint app
pnpm exec stylelint "app/**/*.{vue,scss}"
```

## 代码约定与常用模式

- Vue 组件使用 `<script setup lang="ts">`；组件文件采用 PascalCase，工具和数据标识符采用 camelCase。
- 遵循 Antfu ESLint 配置：TypeScript 和 Vue 模板使用 Tab 缩进、单引号、不写分号；JSON 和 YAML 使用两个空格缩进。
- 使用类型化的 `defineProps`/`defineEmits`、只读数据契约、Nuxt composable、`computed` 以及 `async`/`await`。
- 使用外部标识符索引目录前必须先校验。保留当前 `isResumeId` 加默认值回退模式。
- 优先使用原生语义控件。`ResumeSwitcher` 特意采用带标签的 `<select>`，并在打印时隐藏。
- 样式主要使用 UnoCSS Wind3 和 attributify 语法；全局页面及打印规则位于 `app/assets/main.scss`。不要引入第二套样式系统。
- 可复用项目内容必须放在 `projectCatalog`；各简历应引用项目，不得复制项目正文。
- 技能和证书必须保留在各自的简历定义中，以便独立调整岗位文案。
- 新增项目时必须同时更新 `ProjectId` 联合类型和 `projectCatalog`。新增简历只需添加一个 `resumeCatalog` 条目，选项会自动生成。
- 技术栈名称受 `app/utils/icon.ts` 中的 `Tech` 类型约束。使用新技术名称前，先向 `techMap` 添加映射。

## 重要文件

- `app/app.vue` — 应用入口、共享个人信息、查询参数驱动的简历选择、SEO 和通用区块渲染。
- `app/data/resumes.ts` — `ResumeProject` 契约、共享项目、岗位专属简历定义、默认 ID 和运行时 ID 守卫。
- `app/components/ResumeSwitcher.vue` — 可访问的动态简历选择器。
- `app/components/Project.vue` — 共享项目元数据、技术图标、链接和项目要点插槽渲染。
- `app/utils/icon.ts` — 技术栈联合类型及 Iconify 映射。
- `app/utils/link.ts` — 外部链接判断和显示文本裁剪。
- `nuxt.config.ts` — 全局 CSS、运行时配置、模块、Vite 主机策略和自定义图标集合。
- `pnpm-workspace.yaml` — 依赖 catalog 及版本范围。
- `eslint.config.js`、`stylelint.config.js`、`uno.config.ts` — 格式和样式约定。

## 运行时与工具偏好

- 使用固定的 `pnpm@10.31.0`；不得使用 npm、Yarn 或 Bun 替换 pnpm、锁文件或 catalog 引用。
- 仓库采用 ESM（`"type": "module"`）。项目没有声明 Node 或 Bun 版本，不得自行假定版本。
- 框架版本通过 `pnpm-workspace.yaml` 的 catalog 管理，包括 Nuxt 4、Vue 3、Vue Router 4、UnoCSS 和 Nuxt Icon。
- 本地个人信息来自被忽略的 `.env`：`NAME`、`PHONE`，以及可选的 `NUXT_PRIVATE_AVATAR`。不得提交私人简历信息或 `real-avatar.png`。
- Nuxt Icon 使用 SVG 模式，加载已安装的 `logos`/`ri` 集合，并将 `public/icons/` 注册为 `custom` 集合。

## 测试与质量保障

- 当前没有配置单元测试、组件测试或 E2E 测试框架，也没有测试文件、覆盖率阈值、CI 工作流，或 `test`/`typecheck`/`lint` package script。
- 将 `pnpm build` 视为最低限度的构建冒烟检查，不得把它当作行为测试已覆盖的证明。
- 修改简历后，运行 `pnpm dev` 并至少验证：
  - `/` 正确展示默认 DevOps 简历。
  - `/?resume=cloud-native` 正确展示云原生技能和项目组合。
  - 切换选择器后，URL、岗位标题、SEO 标题、技能、项目和证书同步更新。
  - 共享个人信息保持不变，打印预览中不显示简历选择器。
- 修改静态部署相关内容后，依次运行 `pnpm generate` 和 `pnpm preview`，并重复上述浏览器冒烟路径。
- 如果引入测试，必须在同一变更中添加测试框架、执行脚本和确定性的覆盖率要求；不得记录不存在的命令。
