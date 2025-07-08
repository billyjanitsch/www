import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [...compat.extends("next/core-web-vitals", "next/typescript")];

export default config;
