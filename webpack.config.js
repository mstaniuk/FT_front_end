// Dummy configuration for auto set `@` as alias for `src` directory in IDE
// For webpack configuration tweaks edit vue.config.js
// https://cli.vuejs.org/config/

module.exports = {
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src")
    }
  }
};
