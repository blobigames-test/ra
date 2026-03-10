const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://games.crazygames.com',
  changeOrigin: true,
  pathRewrite: { '^/': '/en_US/ragdoll-archers/' }
}));

app.listen(3000);
