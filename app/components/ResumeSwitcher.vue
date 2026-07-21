<script setup lang="ts">
interface ResumeOption {
	id: string
	label: string
}

defineProps<{
	modelValue: string
	options: readonly ResumeOption[]
}>()

const emit = defineEmits<{
	'update:modelValue': [value: string]
}>()

const selectId = useId()

function handleChange(event: Event) {
	emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>

<template>
<div class="flex items-center gap-2 print:hidden">
	<label :for="selectId" text="sm slate-500 @dark:slate-300">
		简历版本
	</label>
	<div class="relative">
		<select
			:id="selectId"
			:value="modelValue"
			aria-label="选择简历版本"
			class="min-h-9 cursor-pointer appearance-none outline-none transition focus-visible:ring-2 focus-visible:ring-blue-500/40"
			bg="white @dark:slate-900"
			border="1 slate-300 @dark:slate-600"
			p="x-3 y-1.5 e-8"
			rounded="md"
			text="sm slate-700 @dark:slate-100"
			@change="handleChange"
		>
			<option v-for="option in options" :key="option.id" :value="option.id">
				{{ option.label }}
			</option>
		</select>
		<Icon
			name="ri:arrow-down-s-line"
			aria-hidden="true"
			class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
		/>
	</div>
</div>
</template>
