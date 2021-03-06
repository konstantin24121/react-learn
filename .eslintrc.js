module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
       "strict": 0
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab",
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "off",
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};