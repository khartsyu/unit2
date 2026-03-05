import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,  // для браузерного окружения
        ...globals.node,      // для node_modules
        ...globals.jest,      // для тестов
      },
    },
    rules: {
      // Возможные ошибки
      "no-unused-vars": ["error", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_" 
      }],
      "no-console": "warn",
      "no-debugger": "error",
      "no-constant-condition": "error",
      "no-duplicate-imports": "error",
      
      // Лучшие практики
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-with": "error",
      "no-shadow": "error",
      
      // Переменные
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "error",
      
      // Стилистические правила
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      
      // Максимальные ограничения
      "max-len": ["error", { "code": 100 }],
      "max-params": ["error", 4],
      "max-depth": ["error", 3],
      "id-length": ["error", { "min": 2, "exceptions": ["i", "j", "x", "y", "_"] }],
      
      // ES6
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "prefer-template": "error",
      "no-useless-concat": "error",
      "template-curly-spacing": ["error", "never"],
    },
  },
  {
    files: ["src/js/__tests__/**/*.js", "src/**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      "no-undef": "off",           // jest функции глобальные
      "max-len": "off",             // тесты могут быть длиннее
      "max-params": "off",          // в тестах можно больше параметров
      "no-magic-numbers": "off",    // в тестах можно числа
    },
  },
  {
    ignores: ["node_modules/**", "coverage/**", "dist/**", "build/**"],
  },
];