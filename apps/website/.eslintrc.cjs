module.exports = {
  root: true,
  extends: ["stlato"],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.eslint.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    ".eslintrc.cjs",
    "dist",
    "theme.config.ts",
    "next.config.js",
    "next-env.d.ts",
  ],
};
