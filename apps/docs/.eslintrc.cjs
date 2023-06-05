module.exports = {
  plugins: ["react-refresh"],
  extends: ["stlato", "plugin:storybook/recommended"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "React",
      },
    ],
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
  ignorePatterns: [".eslintrc.cjs", "tailwind.config.js", "dist"],
};
