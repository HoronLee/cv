<script setup lang="ts">
import {
	DEFAULT_RESUME_ID,
	isResumeId,
	resumeCatalog,
	resumeOptions,
} from '~/data/resumes'

const publicConfig = useRuntimeConfig().public
const route = useRoute()

const name = publicConfig.name || '**然'
const phone = publicConfig.phone || '151****0653'

const selectedResumeId = computed(() => {
	const resumeId = route.query.resume
	return isResumeId(resumeId) ? resumeId : DEFAULT_RESUME_ID
})

const selectedResume = computed(() => resumeCatalog[selectedResumeId.value])

async function selectResume(resumeId: string) {
	if (!isResumeId(resumeId) || resumeId === selectedResumeId.value)
		return

	await navigateTo({
		path: route.path,
		query: {
			...route.query,
			resume: resumeId,
		},
	}, { replace: true })
}

useSeoMeta({
	title: () => `${name} - ${selectedResume.value.headline}`,
	description: () => `${name}的${selectedResume.value.headline}实习简历`,
	robots: 'noindex, nofollow',
})
</script>

<template>
<div class="flex flex-wrap items-center justify-between gap-2 print:hidden" m="x-1 y-.5 b-2">
	<Builder w="fit" />
	<ResumeSwitcher
		:model-value="selectedResumeId"
		:options="resumeOptions"
		@update:model-value="selectResume"
	/>
</div>
<article
	bg="white @dark:slate/10 print:transparent" p="6 print:x-2 print:y-0" text="3.7" tracking="wide"
	rounded="xl print:0"
>
	<div class="flex items-center justify-between">
		<div>
			<h1 text="4xl bold">
				{{ name }}
			</h1>
			<h2 text="xl" tracking="wider" font="light" m="t-2">
				{{ selectedResume.headline }}
			</h2>
		</div>
		<!-- <img :src="avatar" alt="个人照片" class="w-25 h-35 rounded-md object-cover" /> -->
	</div>

	<ul columns="sm:2" p="is-0">
		<InfoLi icon="ri:smartphone-line" label="电话">
			{{ phone }} (同微信)
		</InfoLi>

		<InfoLi icon="ri:mail-line" label="邮箱">
			<InfoLink to="mailto:horonlee@foxmail.com" />
		</InfoLi>

		<InfoLi icon="ri:github-line" label="GitHub">
			<InfoLink to="https://github.com/HoronLee">
				HoronLee
			</InfoLink>
		</InfoLi>

		<InfoLi icon="ri:blogger-line" label="Blog">
			<InfoLink to="https://blog.horonlee.com">
				blog.horonlee.com
			</InfoLink>
		</InfoLi>

		<InfoLi icon="ri:men-line" label="性别">
			男
		</InfoLi>

		<InfoLi icon="ri:calendar-line" label="出生年月">
			2003.10
		</InfoLi>

		<InfoLi icon="ri:school-line" label="学校">
			苏州科技大学 (计算机科学与技术)<br>
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
			<li v-for="skill in selectedResume.skills" :key="skill">
				{{ skill }}
			</li>
		</ul>
	</InfoSection>

	<InfoSection title="项目经验">
		<Project
			v-for="project in selectedResume.projects"
			:key="project.name"
			:name="project.name"
			:desc="project.desc"
			:role="project.role"
			:link="project.link"
			:from="project.from"
			:to="project.to"
			:techs="project.techs"
		>
			<ul>
				<li v-for="highlight in project.highlights" :key="highlight">
					{{ highlight }}
				</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="个人证书">
		<ul>
			<li v-for="certificate in selectedResume.certificates" :key="certificate">
				{{ certificate }}
			</li>
		</ul>
	</InfoSection>
</article>
</template>
