const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://files.crazygames.com',
  changeOrigin: true,
  pathRewrite: { '^/': '/ragdoll-archers/41/' }
}));

app.listen(3000);
