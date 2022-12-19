const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/checkout", {
      target:
        "http://battuta.medunes.net/api/country/all/?key=dd0fe950948aebe004fe7f39ce43f3c5",
      changeOrigin: true,
    })
  );
};
