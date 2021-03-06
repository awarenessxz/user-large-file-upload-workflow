const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/api/fs/**", { target: "http://localhost:8080", changeOrigin: true, secure: false }));
};
