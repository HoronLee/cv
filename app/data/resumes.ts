import type { Tech } from '~/utils/icon'

export interface ResumeProject {
	name: string
	desc: string
	role?: string
	from: string
	to?: string
	link?: string
	techs: readonly Tech[]
	highlights: readonly string[]
}

interface ResumeDefinition {
	label: string
	headline: string
	skills: readonly string[]
	projects: readonly ResumeProject[]
	certificates: readonly string[]
}

type ProjectId = 'haoyueCloud' | 'jenkins' | 'servora'

export const projectCatalog: Record<ProjectId, ResumeProject> = {
	servora: {
		name: 'Servora',
		desc: '基于 Kratos 的微服务快开框架',
		role: '核心开发者',
		link: 'https://github.com/Servora-Kit/servora',
		from: '2024.08',
		techs: [
			'Go',
			'TypeScript',
			'Kratos',
			'Protobuf',
			'gRPC',
			'OpenTelemetry',
			'Jaeger',
			'Prometheus',
			'Grafana',
		],
		highlights: [
			'基于 Kratos V2 开发微服务快速开发框架，采用 DDD 分层与 Proto First 方式，覆盖 API 定义、代码生成、服务实现、前端联调、可观测性与容器化开发链路。',
			'使用 Buf v2 workspace 管理 Proto 定义，支持 gRPC、HTTP 双协议接口及 OpenAPI 文档自动生成，实现前后端类型安全的 API 联调。',
			'采用 Go workspace 多模块架构，使用 Wire 进行依赖注入，Ent 作为主 ORM，遵循 service → biz → data 的 DDD 分层设计。',
			'集成 OTel Collector、Jaeger、Loki、Prometheus 与 Grafana，支持分布式追踪、日志聚合和监控告警。',
			'深入研究 Bilibili 开源的 Kratos 项目，并为 Consul 服务发现在使用 Traefik 作为 Provider 时提交适配代码。',
		],
	},
	jenkins: {
		name: 'Jenkins CI/CD in K8s',
		desc: '基于 K8s 的 Jenkins 持续集成与部署',
		role: '流程设计者',
		link: 'https://blog.horonlee.com/posts/K8sJenkinsSlaveCICD',
		from: '2023.08',
		to: '2023.09',
		techs: [
			'Linux',
			'Jenkins',
			'Docker',
			'Kubernetes',
			'Gitea',
			'Harbor',
			'Vue 3',
		],
		highlights: [
			'基于 Kubernetes 集群搭建 Jenkins-Slave 模式持续集成与部署环境，实现 Vue 项目的自动化构建和部署。',
			'使用 Gitea 作为代码仓库，结合 Webhooks 触发 Jenkins 流水线，实现代码提交后自动启动构建流程。',
			'使用 Docker 将应用打包为镜像并推送至 Harbor 私有镜像仓库，完成镜像分发链路。',
			'通过项目实践深入理解 CI/CD，并掌握在 K8s 环境中部署和管理 Jenkins 的方法。',
		],
	},
	haoyueCloud: {
		name: '皓月云',
		desc: 'PaaS 云服务平台',
		role: '创建者',
		from: '2023.05',
		to: '2025.02',
		techs: ['Server', 'Linux', 'Hyper-V', 'iKuai'],
		highlights: [
			'基于 Hyper-V 虚拟化、轻舟云管理系统和魔方财务搭建 PaaS 云服务平台，支持通过网页一键交付产品。',
			'云服务器支持 CentOS、Ubuntu 等主流操作系统，并支持用户自主重装系统。',
			'通过 iKuai 虚拟路由为客户机提供 NAT 或浮动 IP 网络接入。',
		],
	},
}

export const resumeCatalog = {
	'devops': {
		label: 'DevOps 运维',
		headline: 'DevOps 运维',
		skills: [
			'熟练掌握 Linux 服务器运维，熟悉 CentOS、Ubuntu 等发行版环境下的常用命令、服务配置和故障排查。',
			'熟悉 Docker 容器化技术，能够编写 Dockerfile 和 Docker Compose；熟悉 Kubernetes 核心概念与集群运维，具备在 K8s 环境中部署和管理应用的能力。',
			'熟悉 DevOps 理念与工作流，能够使用 Jenkins 与 GitLab 搭建 CI/CD 流水线，实现应用的自动化构建与部署。',
			'了解 Prometheus、Grafana 等监控工具，能够开展系统性能监控、指标分析和故障定位。',
			'了解 MySQL、Redis 等常用数据库，熟悉 MySQL 主从复制、读写分离架构，并能够配置 Redis 哨兵模式。',
			'掌握 Go 语言，了解 Python 和 Shell，能够编写运维工具及自动化脚本。',
		],
		projects: [
			projectCatalog.jenkins,
			projectCatalog.haoyueCloud,
			projectCatalog.servora,
		],
		certificates: [
			'2024 年江苏省职业院校技能大赛云计算赛项一等奖',
			'2023 年金砖国家职业院校技能大赛云计算赛项国赛一等奖',
		],
	},
	'cloud-native': {
		label: '云原生开发',
		headline: '云原生开发',
		skills: [
			'熟练掌握 Go 语言，具备 Web 后端开发能力，熟悉微服务架构与服务拆分。',
			'熟悉 Kratos、Protobuf 和 gRPC，具备基于 Proto First 与 DDD 分层方式开发微服务的实践经验。',
			'熟悉 Docker 与 Kubernetes，能够完成应用容器化、服务编排及 K8s 环境下的部署和管理。',
			'熟悉 OpenTelemetry、Jaeger、Prometheus 与 Grafana，了解分布式追踪、日志聚合和监控告警链路。',
			'熟悉 CI/CD 工作流，能够使用 Jenkins、GitLab、Gitea 与 Harbor 完成应用构建、镜像分发和自动化部署。',
			'了解 MySQL、Redis 和 Linux 服务环境，能够完成云原生应用所需的基础数据服务及运行环境配置。',
		],
		projects: [
			projectCatalog.servora,
			projectCatalog.jenkins,
		],
		certificates: [
			'2024 年江苏省职业院校技能大赛云计算赛项一等奖',
			'2023 年金砖国家职业院校技能大赛云计算赛项国赛一等奖',
		],
	},
} as const satisfies Record<string, ResumeDefinition>

export type ResumeId = keyof typeof resumeCatalog

export const DEFAULT_RESUME_ID: ResumeId = 'devops'

export const resumeOptions = Object.entries(resumeCatalog).map(([id, resume]) => ({
	id: id as ResumeId,
	label: resume.label,
}))

export function isResumeId(value: unknown): value is ResumeId {
	return typeof value === 'string'
		&& Object.prototype.hasOwnProperty.call(resumeCatalog, value)
}
