const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "./src/components",
    "@config": "./src/config",
    "@data": "./src/data",
    "@assets": "./src/assets",
    "@pages": "./src/pages",
    "@services": "./src/services",
    "@store": "./src/store",
    "@styles": "./src/styles",
    "@tests": "./src/tests",
    "@utils": "./src/utils",
  })(config);

  return config;
};
