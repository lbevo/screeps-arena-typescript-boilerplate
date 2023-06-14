module.exports = {
  // 'parser': '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
    // "project": "tsconfig.json",
    // "tsconfigRootDir": helpers.root(),
    // "extraFileExtensions": [".vue"],
    // "projectFolderIgnoreList": [helpers.root("node_modules"), helpers.root("build")]
  },
  extends: [
    'plugin:@typescript-eslint/base'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // Keep it empty
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        // Supported Rules
        // "@typescript-eslint/quotes": ["error", "single", {"allowTemplateLiterals": true}]
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/array-type': ['warn', { default: 'generic' }],
        // "@typescript-eslint/await-thenable": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/ban-ts-comment": "off", // Does not work ?
        // "@typescript-eslint/ban-tslint-comment": "warn",
        // "@typescript-eslint/ban-types": "warn",
        // "@typescript-eslint/class-literal-property-style": "warn",
        // '@typescript-eslint/consistent-indexed-object-style': "warn",
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/explicit-function-return-type': ['warn', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          allowHigherOrderFunctions: false,
          allowDirectConstAssertionInArrowFunctions: false,
          allowedNames: []
        }],
        // "@typescript-eslint/explicit-member-accessibility": "warn",
        // '@typescript-eslint/explicit-module-boundary-types': ['warn', { allowArgumentsExplicitlyTypedAsAny: true }],
        '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'comma', requireLast: false } }],
        // "@typescript-eslint/member-ordering": "warn", // FIXME Should be defined between us
        '@typescript-eslint/method-signature-style': ['warn', 'property'],
        // "@typescript-eslint/naming-convention": "warn",
        // "@typescript-eslint/no-base-to-string": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-confusing-non-null-assertion": "warn", // Rule not find when running the linter, probably version update is needed
        '@typescript-eslint/no-dynamic-delete': 'warn',
        // "@typescript-eslint/no-empty-interface": ["warn", {allowSingleExtends: true}],
        // "@typescript-eslint/no-explicit-any": "warn",
        '@typescript-eslint/no-extra-non-null-assertion': 'warn', // Rule not find when running the linter, probably version update is needed
        // "@typescript-eslint/no-extraneous-class": "warn",
        // "@typescript-eslint/no-floating-promises": "warn", // Need parser that's slow down linting
        '@typescript-eslint/no-for-in-array': 'warn',
        // '@typescript-eslint/no-implicit-any-catch': 'warn', // FIXME: May be worth activate it in future
        // "@typescript-eslint/no-implied-eval": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-inferrable-types": "warn", // FIXME: To discuss we may activate this one
        // "@typescript-eslint/no-invalid-void-type": ["warn", {allowInGenericTypeArguments: true}]
        '@typescript-eslint/no-misused-new': 'warn',
        // "@typescript-eslint/no-misused-promises": "warn", // Need parser that's slow down linting
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        // "@typescript-eslint/no-non-null-assertion": "warn",
        // '@typescript-eslint/no-confusing-void-expression': 'warn', // Need parser that's slow down linting
        // "@typescript-eslint/no-parameter-properties": "warn",
        // "@typescript-eslint/no-require-imports": "warn", // We use it in specific places
        '@typescript-eslint/no-this-alias': 'warn',
        // "@typescript-eslint/no-throw-literal": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-type-alias": "warn",
        // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unnecessary-condition": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unnecessary-qualifier": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unnecessary-type-arguments": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unnecessary-type-assertion": "warn", // Need parser that's slow down linting
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        // '@typescript-eslint/no-redundant-type-constituents': 'warn', // Need parser that's slow down linting
        // "@typescript-eslint/no-unsafe-argument": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unsafe-assignment": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unsafe-call": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unsafe-member-access": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-unsafe-return": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/no-var-requires": "warn",
        // "@typescript-eslint/non-nullable-type-assertion-style": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-as-const": "warn",
        // '@typescript-eslint/prefer-enum-initializers': 'warn', // FIXME: May be worth it add it in future
        // "@typescript-eslint/prefer-for-of": "warn",
        // '@typescript-eslint/prefer-function-type': 'warn',
        // "@typescript-eslint/prefer-includes": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-literal-enum-member": "off"
        // "@typescript-eslint/prefer-namespace-keyword": "warn",
        // "@typescript-eslint/prefer-nullish-coalescing": "warn",
        // '@typescript-eslint/prefer-optional-chain': 'warn', // FIXME: To we want that ?
        // "@typescript-eslint/prefer-readonly": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-readonly-parameter-types": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-reduce-type-parameter": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-regexp-exec": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/prefer-string-starts-ends-with": "warn", // Need parser that's slow down linting
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        // "@typescript-eslint/promise-function-async": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/require-array-sort-compare": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/restrict-plus-operands": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/restrict-template-expressions": "warn", // Need parser that's slow down linting
        // '@typescript-eslint/sort-type-union-intersection-members': 'warn',
        // "@typescript-eslint/strict-boolean-expressions": "warn", // Need parser that's slow down linting
        // "@typescript-eslint/switch-exhaustiveness-check": "warn", // Need parser that's slow down linting
        '@typescript-eslint/triple-slash-reference': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'warn',
        // '@typescript-eslint/typedef': ['warn', { parameter: true, propertyDeclaration: true }],
        // "@typescript-eslint/unbound-method": "warn", // Need parser that's slow down linting
        '@typescript-eslint/unified-signatures': 'warn',

        // Extension Rules
        // note you must disable the base rule as it can report incorrect errors
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['warn', '1tbs', { allowSingleLine: false }],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'warn',

        // "default-param-last": "off",
        // "@typescript-eslint/default-param-last": ["warn"], // We could allow this rule depending on preference

        // "dot-notation": "off",
        // "@typescript-eslint/dot-notation": ["warn"], // Need parser that's slow down linting

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'warn',

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        indent: 'off',
        '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 1, FunctionDeclaration: { parameters: 'first' }, FunctionExpression: { parameters: 'first' } }],

        // "init-declarations": "off",
        // "@typescript-eslint/init-declarations": "off"

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'warn',

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'warn',

        // Cannot activate this rule, because if we separate import of typings and the concrete code, a warning arises.
        // 'no-duplicate-imports': 'off',
        // '@typescript-eslint/no-duplicate-imports': 'warn',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['warn', { allow: ['constructors'] }],

        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'off',

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'warn',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',

        // Rule not find ? Strange I have eslint 7
        // "no-loss-of-precision": "off",
        // "@typescript-eslint/no-loss-of-precision": "warn",

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['warn', { ignoreDeclarationMerge: true }],

        // 'no-shadow': 'off',
        // '@typescript-eslint/no-shadow': ['warn'],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'warn',

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_|^h$' }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        // "no-use-before-define": "off",
        // "@typescript-eslint/no-use-before-define": "warn"

        // "no-useless-constructor": "off",
        // "@typescript-eslint/no-useless-constructor": "off"

        quotes: 'off',
        '@typescript-eslint/quotes': ['warn', 'single', { allowTemplateLiterals: true }],

        // "require-await": "off",
        // "@typescript-eslint/require-await": "warn", // Need parser that's slow down linting

        // "no-return-await": "warn",
        // "@typescript-eslint/return-await": "warn"

        semi: 'off',
        '@typescript-eslint/semi': ['warn', 'always'],

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],

        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'off'
      }
    }
  ]
};