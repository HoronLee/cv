import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    pnpm: true,
    // @keep-sorted
    rules: {
        'jsonc/indent': ['error', 2],
        'vue/block-lang': ['warn', {
            script: { lang: ['ts', 'tsx'] },
            style: { lang: ['scss'] },
        }],
        'vue/enforce-style-attribute': ['warn', {
            allow: ['scoped'],
        }],
        'vue/html-indent': ['error', 4, { baseIndent: 0 }],
        'yaml/indent': ['error', 2],
    },
}, {
    files: ['**/*.json'],
    rules: {
        'jsonc/sort-keys': 'off',
        'style/eol-last': 'off',
    },
})
