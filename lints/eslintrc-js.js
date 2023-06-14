module.exports = {
  rules: {
    // Possible Errors
    'no-async-promise-executor': 'warn',
    // 'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'warn',
    'no-cond-assign': 'warn',
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'warn',
    'no-debugger': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty': 'warn',
    'no-empty-character-class': 'warn',
    'no-ex-assign': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': 'off',
    'no-extra-semi': 'warn',
    'no-func-assign': 'warn',
    'no-import-assign': 'warn',
    // "no-inner-declarations": "off", // Useless
    'no-invalid-regexp': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-loss-of-precision': 'warn',
    'no-misleading-character-class': 'warn',
    'no-obj-calls': 'warn',
    'no-prototype-builtins': 'warn', // Maybe remove it if your project use a lot of these
    'no-regex-spaces': 'warn',
    'no-setter-return': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unsafe-negation': 'warn',
    'no-useless-backreference': 'warn',
    'require-atomic-updates': 'warn',
    'use-isnan': 'warn',
    'valid-typeof': 'warn',

    // Best Practices
    'accessor-pairs': 'off',
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    // "class-methods-use-this": "warn", // To be discuss (generate 443 warning)
    complexity: 'off', // Should look  in practice if this rule is usable
    // "consistent-return": "off", // Would generate 29 warnings
    curly: ['warn', 'all'],
    'default-case': 'warn', // FIXME: We could allow this rule and use the skip default comment - This rules should also be discuss, see https://bitbucket.org/edgelab/benzene/pull-requests/486/el-8440-add-some-lints-rules/diff#comment-157567912
    'default-case-last': 'warn',
    // "default-param-last": "warn", // We could allow this rule depending on preference
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'always'],
    'grouped-accessor-pairs': 'warn',
    'guard-for-in': 'warn',
    'max-classes-per-file': ['warn', 1],
    'no-alert': 'warn',
    'no-caller': 'warn',
    'no-case-declarations': 'warn',
    'no-constructor-return': 'warn',
    'no-div-regex': 'warn',
    // "no-else-return": "off", // Could break a lot of thing in some project! 87 errors
    'no-empty-function': ['warn', { allow: ['constructors'] }],
    'no-empty-pattern': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-global-assign': 'warn',
    'no-implicit-coercion': ['warn', { allow: ['!!', '+'] }],
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'off',
    'no-iterator': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    // "no-magic-numbers": "warn", // Could break a lot of thing in some project! 788 errors
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    // "no-param-reassign": "warn", // FIXME: Should be enabled 14 errors to fix - Could also does not allow reassign of property but he relies too much on that
    'no-proto': 'warn',
    'no-redeclare': 'warn',
    // "no-restricted-properties": "off", // Maybe we should look at what other people do for that
    // "no-return-assign": "warn", // Because: promise.then(result => vm.result = result); trigger the error https://github.com/eslint/eslint/issues/5150
    // "no-return-await": "warn", // Could be discuss
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-expressions': 'warn', // Could break a lot of thing in some project! Maybe, we should allow ternary and short circuit!
    'no-unused-labels': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-catch': 'warn',
    // "no-useless-escape": "warn", // Not sure this rule work correctly
    'no-useless-return': 'warn',
    'no-void': 'warn',
    'no-warning-comments': 'off', // Put warn if you want to localize all TODO/FIXME/etc. in the code
    'no-with': 'warn',
    'prefer-named-capture-group': 'off', // We are targeting EMCA2018 < , https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'warn',
    // "radix": "warn", // See if meaningful for us to activate it
    'require-await': 'warn',
    // "require-unicode-regexp": "off" Seems useless
    // "vars-on-top": "warn", // 87 issues in old code, and in new one we use let or const anyway
    // "wrap-iife": "off", // Do not need it with Webpack
    yoda: 'warn',

    // Strict
    strict: 'warn',

    // Variables
    // "init-declarations": "warn", // Does not work well with typescript and too much errors to fix
    'no-delete-var': 'warn',
    'no-label-var': 'warn',
    // "no-restricted-globals": "warn",
    // "no-shadow": "warn",
    'no-shadow-restricted-names': 'warn',
    // "no-undef": "warn", // FIXME: Must be enabled, we should get ride of those global variables (1400 warnings)
    'no-undef-init': 'warn',
    // "no-undefined": "warn", // We have 120+ usage of undefined
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_|^h$', destructuredArrayIgnorePattern: '^_' }],
    // "no-use-before-define": "warn", // Does not work well with typescript

    // Stylistic Issues
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': 'warn',
    // "array-element-newline": "warn",
    'block-spacing': 'warn',
    'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    // "camelcase": "warn", // We use this syntax on unit test
    'capitalized-comments': 'off',
    // "comma-dangle": "warn", // FIXME: To decide between us what we want to do
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    // "consistent-this" :["warn", "vm", "_this"],
    'eol-last': 'warn',
    'func-call-spacing': 'warn',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': ['warn', 'consistent'],
    // "function-paren-newline": ["warn", "consistent"],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['warn', 'beside'],
    indent: ['warn', 2, { SwitchCase: 1, FunctionDeclaration: { parameters: 'first' }, FunctionExpression: { parameters: 'first' } }],
    'jsx-quotes': 'off',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'line-comment-position': 'off', // We want above and beside
    'linebreak-style': 'warn',
    // "lines-around-comment" :"warn", // Maybe, we can disable it
    // "lines-between-class-members": "warn", // Applies to variable too
    'max-depth': ['warn', 7],
    'max-len': ['warn', 300, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }], // The first idea was 200 max, have to see
    // max-lines": ["warn", { max: 300, skipBlankLines: true, skipComments: true }],
    // max-lines-per-function: "off"
    'max-nested-callbacks': ['warn', 4], // 4 Could be a little bit low, increase it to off if necessary
    'max-params': ['warn', 10], // Because of Angular injection, this rules maybe should be disabled
    'max-statements': 'off',
    'max-statements-per-line': ['warn', { max: 1 }],
    'multiline-comment-style': 'off',
    // "multiline-ternary": ["warn", "never"],
    'new-cap': ['warn', { capIsNew: false }],
    'new-parens': 'warn',
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    'no-array-constructor': 'warn',
    'no-bitwise': 'warn',
    'no-continue': 'warn',
    'no-inline-comments': 'off',
    // "no-lonely-if" :"warn", // Could be activated
    // "no-mixed-operators": ["warn", { groups: [["+", "-", "*", "/", "%", "**"], ["&", "|", "^", "~", "<<", ">>", ">>>"], ["==", "!=", "===", "!==", ">", ">=", "<", "<="], ["&&", "||"], ["in", "instanceof"]], allowSamePrecedence :false }], // Could break a lot of thing in some project! (Disable it if too many modifications)
    'no-mixed-spaces-and-tabs': 'warn',
    // "no-multi-assign": "warn",
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }], // Maybe we could switch to max of 2
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'warn',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['warn', 'ForInStatement', 'LabeledStatement', 'WithStatement'], // This list is subject to changes and adaptation
    'no-tabs': 'warn',
    'no-ternary': 'off',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['warn', 'always'], // Should be careful, because IDE have their own formating on this rule FIXME: I think we should align on this one
    'object-property-newline': 'off',
    // "one-var":["warn", "never"],
    // "one-var-declaration-per-line" :"off",
    // "operator-assignment" :"off",
    // "operator-linebreak":["warn", "before"], // Could be changed if needed
    // "padded-blocks" :"off",
    // "padding-line-between-statements"
    'prefer-object-spread': 'warn',
    // "quote-props":["warn", "as-needed", { keywords: true, unnecessary: true, numbers: false }],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // require-jsdoc" :"off",
    semi: ['warn', 'always'],
    // semi-spacing" :"warn",
    'semi-style': 'warn',
    // "sort-keys":["off", "asc", { caseSensitive: false, natural: true }], // Not always meaningful
    // "sort-vars" :"off",
    // "space-before-blocks" :"warn",
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'spaced-comment': 'off',
    // "space-in-parens" :"off",
    // "space-infix-ops" :"warn",
    // "space-unary-ops":["warn", { words: true, nonwords: false }],
    // "spaced-comment":["warn", "always", { exceptions: ["*"] }],
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'off',
    // "unicode-bom" :"warn",
    // "wrap-regex" :"off",

    // ECMAScript 6
    //  "arrow-body-style": ["error", "as-needed"], // FIXME: We should align on this one if we want to apply it
    //  "arrow-parens": ["warn", "as-needed"], // FIXME: We should align on this one if we want to apply it
    'arrow-spacing': ['warn', { before: true, after: true }],
    'constructor-super': 'warn',
    'generator-star-spacing': ['warn', { before: true, after: false }], // Chosen randomly, but fixing one syntax seems useful
    'no-class-assign': 'warn',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'warn',
    'no-dupe-class-members': 'warn',
    // "no-duplicate-imports": "warn",
    'no-new-symbol': 'warn',
    'no-restricted-exports': 'off', // We should be aware of what we can import or not
    'no-restricted-imports': 'off', // We should be aware of what we can export or not
    'no-this-before-super': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'off', // We need "useless" constructor for singleton

    'no-useless-rename': 'warn',
    'no-var': 'off', // Cannot activate it yet, because we use var on some old code
    'object-shorthand': 'off',

    // "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }], // Ask for opinion but we have 450+ errors on that
    'prefer-const': 'warn',
    // "prefer-destructuring": "warn", // Subjective choice
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'warn',
    // "prefer-spread": "warn",
    'prefer-template': 'off',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    // "sort-imports": ["warn", { // Do not fixes all the import order, so a bit useless
    //          "ignoreCase": false,
    //          "ignoreDeclarationSort": false,
    //          "ignoreMemberSort": false,
    //          "memberSyntaxSortOrder": ["none", "single", "multiple", "all"]
    //      }],
    'symbol-description': 'warn',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['warn', { before: true, after: false }] // Chosen randomly, but fixing one syntax seems useful
  }
};
