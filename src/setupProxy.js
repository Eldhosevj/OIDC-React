const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Account/Login',
    createProxyMiddleware({
      target: 'https://sts-lle.atsol.com',
      changeOrigin: true,
    })
  );
};