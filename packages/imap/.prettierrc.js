module.exports = {
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "preserve",
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore",
  "overrides": [
    {
      "files": [
        "*.json",
        ".eslintrc",
        ".babelrc",
        ".stylelintrc",
        ".prettierrc"
      ],
      "options": {
        "parser": "json",
        "tabWidth": 2
      }
    }
  ]
}
