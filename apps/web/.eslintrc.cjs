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
    "next.config.cjs",
    "theme.config.tsx",
  ],
};
