module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    ecmaFeatures: {
        modules: true
    },
    rules: {
        indent: [2, 4],
        'linebreak-style': [2, 'unix'],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'no-unused-vars': [2],
        'no-console': 0,
    },
};
