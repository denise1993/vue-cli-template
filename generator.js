module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.3.2",
      vue: "^2.6.10"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.0.0",
      "@vue/cli-plugin-eslint": "^4.0.0",
      "@vue/cli-service": "^4.0.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "babel-eslint": "^10.0.3",
      eslint: "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "lint-staged": "^9.4.2",
      "vue-template-compiler": "^2.6.10"
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,vue}": ["vue-cli-service lint", "git add"]
    }
  });
  api.render("./template");
};