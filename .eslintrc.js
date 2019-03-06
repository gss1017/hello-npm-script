module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-console": ['off'],
        "indent": ['error', 4],
        "linebreak-style": ['error', 'unix'],
        "quotes": ['error', 'single'],
        "semi": ['error', 'always'],
        "import/no-extraneous-dependencies": "off",
        "object-curly-spacing": ["error", "never"],
        "object-curly-newline": ["error", {"multiline": true, "consistent": true}],
    }
};
