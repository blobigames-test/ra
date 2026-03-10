const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://files.crazygames.com/ragdoll-archers/41',
  changeOrigin: true,
  pathRewrite: { '^/': '/' }
}));

app.listen(process.env.PORT || 3000);
