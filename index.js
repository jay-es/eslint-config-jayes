module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    // continue 文の使用を許可
    'no-continue': 'off',
    // for文の ++ は許可
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // ブロックなどの後、 return 文などの前に空行を入れる
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block-like', 'multiline-expression'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'throw', 'break', 'continue'],
      },
    ],
    // airbnb に寄せる
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: '*.ts',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // 空のコンストラクタを許可
        'no-empty-function': ['error', { allow: ['constructors'] }],
        'no-useless-constructor': 'off',
      },
    },
  ],
};
