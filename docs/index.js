const express = require('express');
const { createProxyMiddleware,responseInterceptor } = require('http-proxy-middleware');

const app = express();
app.use(express.static('docs'))
app.use('/', createProxyMiddleware({
    target: 'https://2type.github.io',
    changeOrigin: true,
    hostRewrite: false,
    followRedirects:true,
    hostRewrite: false,
    followRedirects:true,
}));
app.listen(3002);