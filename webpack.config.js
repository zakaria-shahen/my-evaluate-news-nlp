const { merge } = require("webpack-merge");
const commonConfig  = require("./webpack.common");

module.exports = (env) => {
  const config = require(`./webpack.${env === "production" ? "prod" : "dev"}`);
  return merge(commonConfig, config);
};
