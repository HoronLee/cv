<script setup lang="ts">
const publicConfig = useRuntimeConfig().public

const name = publicConfig.name || '**璐'
const phone = publicConfig.phone || '133****9192'

useSeoMeta({
	title: `${name} - 前端开发实习`,
	description: `${name}的前端开发实习简历`,
	robots: 'noindex, nofollow',
})
</script>

<template>
<Builder class="block print:hidden" w="fit" m="is-auto x-1 y-.5" />
<article
	bg="white @dark:slate/10 print:transparent"
	p="6 print:x-2 print:y-0"
	text="3.7"
	tracking="wide"
	rounded="xl print:0"
>
	<h1 text="center" m="be-4">
		{{ name }}
	</h1>

	<ul columns="sm:2" p="is-0">
		<InfoLi icon="ri:smartphone-line" label="电话">
			{{ phone }} (同微信)
		</InfoLi>

		<InfoLi icon="ri:mail-line" label="邮箱">
			<InfoLink to="mailto:hi@zhilu.cyou" />
		</InfoLi>

		<InfoLi icon="ri:github-line" label="GitHub">
			<InfoLink to="https://github.com/L33Z22L11">
				L33Z22L11
			</InfoLink>
		</InfoLi>

		<InfoLi icon="ri:men-line" label="性别">
			男
		</InfoLi>

		<InfoLi icon="ri:school-line" label="学校">
			西安邮电大学 (计算机科学与技术)
		</InfoLi>

		<InfoLi icon="ri:graduation-cap-line" label="学历">
			本科在读 (2026 届)
		</InfoLi>
	</ul>

	<InfoSection title="个人技能">
		<ul>
			<li>掌握 Vue 3、Nuxt 4、TypeScript，熟练掌握响应式设计、UI/UX 优化</li>
			<li>具备敏锐的用户需求感知能力，关注用户体验与可访问性</li>
			<li>善于运用 AI 工具提升开发效能，注重代码质量与兼容性实践</li>
		</ul>
	</InfoSection>

	<InfoSection title="实习经历">
		<Project
			name="字节跳动"
			desc="中国商业产品与技术-巨量引擎竞价广告投放平台-前端开发"
			from="2025.05"
		>
			<ul>
				<li>“简单投”页面实现说明文案动态展示/配置能力，发现并解决投放平台十余处用户体验问题</li>
				<li>发起静态资源治理专项，发现图文列表加载性能问题，制定报警规则多次回归线上资源问题</li>
				<li>内网技术社区文章登日榜周榜，主讲AD技术圆桌会、商业化欢乐Talk各一期</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="项目经验">
		<Project
			name="blog-v3"
			desc="个人博客"
			role="创建者"
			link="https://github.com/L33Z22L11/blog-v3"
			from="2024.08"
			:techs="['Nuxt', 'Vue 3', 'TypeScript', 'Pinia', 'Scss']"
		>
			<ul>
				<li>开源项目获 120+Stars，15+真实下游用户，通过 GitHub、交流群持续迭代项目，适配多个云构建平台的 SSR/SSG 功能。</li>
				<li>发现上游多处不合预期的问题，通过提交 Issue / PR、打 Patch 等方式修复。</li>
				<li>精校响应式设计、深色模式体验、文字排版布局，设计风格优雅统一，组件系统完善。</li>
				<li>通过 Google Search Console 监测发现境外繁体镜像站点，参阅 Whois、HTTP Header 等信息，定位到 Cloudflare 反代 + 域名替换的行为机制，开发出恶意反代跳转回原站的方案；同时排查 SEO 问题，优化至月 PV 10K。</li>
			</ul>
		</Project>

		<Project
			name="GioPic"
			desc="图床上传桌面程序"
			role="核心贡献者"
			link="https://github.com/isYangs/GioPic"
			from="2024.08"
			to="2025.02"
			:techs="['Electron', 'Vue 3', 'TypeScript', 'Axios', 'UnoCSS', 'NaiveUI']"
		>
			<ul>
				<li>解决跨平台启动问题，在 macOS 开发的项目在 Windows 上无法启动，通过查阅报错资料，修改构建脚本，实现多平台开发运行。</li>
				<li>提升项目扩展性，针对适配 AWS S3 / 第三方 OSS 存储源时代码扩展性差的问题，重构图床存储程序定义代码，实现第三方图床存储兼容。</li>
				<li>优化图标显示，针对 Windows 托盘图标、macOS 启动台图标比例异常问题，参考 Electron、Apple Developer 等文档规范，使用原型设计工具绘制图标并调整逻辑，实现多系统、多颜色模式下托盘、桌面图标完美显示。</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="个人证书">
		<ul>
			<li>CET-4、CET-6</li>
			<li>中国大学生计算机设计大赛西北赛区二等奖</li>
		</ul>
	</InfoSection>
</article>
</template>
