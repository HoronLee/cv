// @keep-sorted
const techMap = {
	'Axios': 'simple-icons:axios',
	'CentOS': 'devicon:centos',
	'Consul': 'logos:consul',
	'Docker': 'logos:docker-icon',
	'Electron': 'file-icons:electron',
	'Gin': 'logos:gin',
	'Gitea': 'simple-icons:gitea',
	'GitHub': 'akar-icons:github-fill',
	'Gitlab': 'devicon:gitlab',
	'Go': 'vscode-icons:file-type-go',
	'Gorm': '',
	'Grafana': 'devicon:grafana',
	'gRPC': 'logos:grpc',
	'Harbor': 'devicon:harbor',
	'Jaeger': 'devicon:jaegertracing',
	'Jenkins': 'vscode-icons:file-type-jenkins',
	'Kratos': 'simple-icons:framework',
	'Kubernetes': 'logos:kubernetes',
	'Linux': 'logos:linux-tux',
	'NaiveUI': 'logos:naiveui',
	'Nitro': 'unjs:nitro',
	'Nuxt': 'vscode-icons:file-type-nuxt',
	'Pinia': 'logos:pinia',
	'Prometheus': 'devicon:prometheus',
	'Scss': 'vscode-icons:file-type-scss',
	'TypeScript': 'vscode-icons:file-type-typescript-official',
	'Ubuntu': 'logos:ubuntu',
	'UnoCSS': 'logos:unocss',
	'VitePress': 'simple-icons:vitepress',
	'Vue 3': 'logos:vue',
	'VueUse': 'logos:vueuse',
}

export type Tech = keyof typeof techMap

export const getTechIcon = (tech: Tech) => techMap[tech] || 'ri:code-line'
