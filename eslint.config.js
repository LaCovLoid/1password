import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,vue}"],  // JS, TypeScript, Vue 파일 대상으로 설정
    plugins: { js, prettier },
    languageOptions: {
      parser: tseslint.parser,  // TypeScript 파서 사용
      parserOptions: {
        ecmaVersion: "latest",  // 최신 ECMAScript 버전 사용
        sourceType: "module",   // 모듈 방식 사용
      },
      globals: globals.browser,  // 브라우저 환경에서 동작
    },
    rules: {
      ...js.configs.recommended.rules,  // JS 기본 규칙을 그대로 사용
      "prettier/prettier": "error",  // Prettier 규칙도 적용 (에러로 처리)
    }
  },
  tseslint.configs.recommended,  // TypeScript 기본 규칙
  pluginVue.configs["flat/recommended"],  // Vue 3 추천 규칙 사용
  {
    files: ["**/*.json"],  // JSON 파일에 대한 규칙
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],  // CSS 파일에 대한 규칙
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  }
]);