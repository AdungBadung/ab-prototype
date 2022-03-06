module.exports = {
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaversion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourcetype: "module",
    project: ["./tsconfig.json"],
  },
};
