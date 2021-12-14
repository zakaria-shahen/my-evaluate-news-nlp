const { commonConfig } = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  const config = require("./webpack." +
    `${env === "production" ? "prod" : "dev"}`);
  return merge(commonConfig, config);
};
