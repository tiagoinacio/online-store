module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parser: "babel-eslint",
    parserOptions: {
        sourceType: 'module',
    },
    ecmaFeatures: {
        modules: true,
        jsx: true
    },
    rules: {
        indent: [2, 4],
        'linebreak-style': [2, 'unix'],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'no-unused-vars': [2],
        'no-console': 0,
    },
    plugins: ['react'],
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
