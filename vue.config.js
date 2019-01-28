const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/sanch941.github.io/'
    : '/'
    ,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./assets/scss/style.scss")]
    }
  }
};
