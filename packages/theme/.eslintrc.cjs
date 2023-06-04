module.exports = {
  root: true,
  extends: ["stlato"],
  rules: {
    "import/extensions": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.eslint.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.cjs", "dist", "*.js"],
};
