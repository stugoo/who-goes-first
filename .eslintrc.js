module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "globals": {
        "global": true,
        "require" : true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": [
          "error",
          "always"
        ],
        "no-multiple-empty-lines":[
          "error",
          {
            max: 2
          }
        ]
    }
};
