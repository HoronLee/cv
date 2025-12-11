<script setup lang="ts">
const publicConfig = useRuntimeConfig().public;

const name = publicConfig.name || "**然";
const phone = publicConfig.phone || "151****0653";
const avatar = publicConfig.avatar;

useSeoMeta({
    title: `${name} - DevOps运维&云原生开发`,
    description: `${name}的DevOps运维&云原生开发实习简历`,
    robots: "noindex, nofollow",
});
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
        <div class="flex items-center justify-between">
            <div>
                <h1 text="4xl bold">
                    {{ name }}
                </h1>
                <h2 text="xl" tracking="wider" font="light" m="t-2">
                    DevOps运维&云原生开发
                </h2>
            </div>
            <img
                :src="avatar"
                alt="个人照片"
                class="w-25 h-35 rounded-md object-cover"
            />
        </div>

        <ul columns="sm:2" p="is-0">
            <InfoLi icon="ri:smartphone-line" label="电话">
                {{ phone }} (同微信)
            </InfoLi>

            <InfoLi icon="ri:mail-line" label="邮箱">
                <InfoLink to="mailto:horonlee@foxmail.com" />
            </InfoLi>

            <InfoLi icon="ri:github-line" label="GitHub">
                <InfoLink to="https://github.com/HoronLee"> HoronLee </InfoLink>
            </InfoLi>

            <InfoLi icon="ri:blogger-line" label="Blog">
                <InfoLink to="https://blog.horonlee.com">
                    blog.horonlee.com
                </InfoLink>
            </InfoLi>

            <InfoLi icon="ri:men-line" label="性别"> 男 </InfoLi>

            <InfoLi icon="ri:calendar-line" label="出生年月"> 2003.10 </InfoLi>

            <InfoLi icon="ri:school-line" label="学校">
                苏州科技大学 (计算机科学与技术)<br />
                <!-- 南京城市职业学院 (云计算技术与应用) -->
            </InfoLi>

            <InfoLi icon="ri:graduation-cap-line" label="学历">
                本科在读 (2027 届)
            </InfoLi>

            <!-- <InfoLi icon="ep:position" label="期望岗位">
			DevOps运维<br>
			云原生开发
		</InfoLi> -->
        </ul>

        <InfoSection title="个人技能">
            <ul>
                <li>
                    熟练掌握 Go 语言，具备 Web
                    后端开发能力，熟悉微服务架构；了解 Python 和 Shell
                    ，可以编写简单的自动化脚本。
                </li>
                <li>
                    熟练掌握 Linux 服务器运维，熟悉 CentOS、Ubuntu
                    等发行版环境下的常用命令与服务配置。
                </li>
                <li>
                    熟悉 Docker 容器化技术，能够编写 Dockerfile 和
                    Docker-Compose；熟悉 Kubernetes 核心概念与集群运维，具备在
                    K8s 环境中部署与管理应用的能力。
                </li>
                <li>
                    熟悉 DevOps 理念与工作流，能够使用 Jenkins 与 GitLab 搭建
                    CI/CD 流水线，实现应用的自动化构建与部署。
                </li>
                <li>
                    了解 MySQL 与 Redis 等常用数据库， MySQL
                    主从复制、读写分离架构，并能够配置 Redis 哨兵模式。
                </li>
                <li>
                    了解常用监控工具（如
                    Prometheus、Grafana）的使用，能够对系统进行性能监控与故障排查。
                </li>
            </ul>
        </InfoSection>

        <!-- 暂无实习经历 -->
        <!-- <InfoSection title="实习经历">
		<Project
			name="皓月互联"
			desc="PaaS 云服务商"
			from="2023.05"
			to="2025.02"
		>
			<ul>
				<li>负责搭建与维护基于 Hyper-V 的 PaaS 云服务平台</li>
				<li>负责搭建财务系统，参与售前与售后的各类工作</li>
				<li>负责服务器硬件的维护与管理，确保系统稳定运行</li>
				<li>协助客户解决使用过程中遇到的各类问题，提供技术支持与咨询服务</li>
				<li>参与技术文档编写与知识分享，提升团队整体技术水平。</li>
			</ul>
		</Project>
	</InfoSection> -->

        <InfoSection title="项目经验">
            <Project
                name="Krathub"
                desc="基于Kratos的微服务快开框架"
                role="创建者"
                link="https://github.com/HoronLee/Krathub"
                from="2024.08"
                :techs="[
                    'Kratos',
                    'Go',
                    'gRPC',
                    'Consul',
                    'Jaeger',
                    'Prometheus',
                    'Grafana',
                ]"
            >
                <ul>
                    <li>
                        基于Kratos
                        V2.0开发，诣在于构建一个开发快速，专注于业务逻辑的微服务框架。
                    </li>
                    <li>
                        内置服务注册与发现和配置中心(Consul/Nacos)、分布式追踪(OpenTelemetry|Jaeger)、监控告警(Prometheus)等功能，简化微服务开发流程。
                    </li>
                    <li>
                        内建gRPC客户端工厂模式，并且带有熔断和链路追踪，可以方便地与其他服务进行通信。
                    </li>
                    <li>
                        开发过程中对Bilibili开源的kratos项目进行了研究，并提交了对Consul服务发现在使用Traefik作为Provider的时候的适配代码。
                    </li>
                    <li>
                        对 gRPC、Protobuf
                        和微服务架构有了更深入的理解，并掌握了在实际项目中应用的能力。
                    </li>
                </ul>
            </Project>
            <Project
                name="Jenkins CI/CD in K8s"
                desc="基于K8s的Jenkins持续集成与部署"
                role="流程设计者"
                link="https://blog.horonlee.com/posts/K8sJenkinsSlaveCICD"
                from="2023.08"
                to="2023.09"
                :techs="[
                    'Linux',
                    'Jenkins',
                    'Docker',
                    'Kubernetes',
                    'Gitea',
                    'Harbor',
                    'Vue 3',
                ]"
            >
                <ul>
                    <li>
                        基于Kubernetes集群搭建Jenkins-Slave模式持续集成与部署环境，实现对
                        Vue 项目的自动化构建与部署。
                    </li>
                    <li>
                        使用 Gitea 作为代码仓库(也可以使用 GitLab)，结合
                        Webhooks 触发 Jenkins
                        流水线，实现代码提交后自动触发构建流程。
                    </li>
                    <li>
                        利用 Docker 容器，将应用打包为镜像，并推送到 Harbor
                        私有镜像仓库，确保镜像的安全与高效分发。
                    </li>
                    <li>
                        对 CI/CD 有了更深入的理解，并掌握了在 K8s
                        环境中部署与管理 Jenkins 的技能。
                    </li>
                </ul>
            </Project>
            <Project
                name="皓月云"
                desc="PaaS 云服务平台"
                role="创建者"
                link=""
                from="2023.05"
                to="2025.02"
                :techs="['Server', 'Linux', 'Hyper-V', 'iKuai']"
            >
                <ul>
                    <li>
                        基于 Hyper-V 虚拟化、轻舟云管理系统和魔方财务的 PaaS
                        云服务平台，支持网页一键交付产品。
                    </li>
                    <li>
                        云服务器支持多种主流操作系统，如 CentOS、Ubuntu
                        等。并且可以自由重装系统。
                    </li>
                    <li>
                        客户机网络通过iKuai虚拟路由实现 NAT 或者浮动 IP 上网。
                    </li>
                </ul>
            </Project>
        </InfoSection>

        <InfoSection title="个人证书">
            <ul>
                <li>2024年江苏省职业院校技能大赛云计算赛项一等奖</li>
                <li>2023年金砖国家职业院校技能大赛云计算赛项国赛一等奖</li>
            </ul>
        </InfoSection>
    </article>
</template>
