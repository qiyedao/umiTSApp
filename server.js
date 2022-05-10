const express = require('express');
const app = express();
const render = require('./dist/umi.server');
const fs = require('fs');
const path = require('path');

const port = 8520;

const domain = 'http://localhost';
const sendFile = async (res, req, extname, filePath) => {
  switch (extname) {
    case '.css':
      res.setHeader('Content-Type', 'text/css');
      res.send(fs.readFileSync(filePath));
      break;
    case '.js':
      res.setHeader('Content-Type', 'text/javascript');
      res.send(fs.readFileSync(filePath));
      break;
    default:
      res.setHeader('Content-Type', 'text/html');
      const context = {};
      const { html, error, rootContainer } = await render({
        // 有需要可带上 query
        path: req.url,
        context,
      });

      res.send(html);
  }
};
// Express
app.use(async (req, res) => {
  // 或者从 CDN 上下载到 server 端
  // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
  /*
      这里做了路由判断，更好的方案是用nginx配置静态目录（指向build好的目录，如dist）
      或者通过express设置静态目录，umi加入publicPath配置
*/
  console.log('path.extname(req.url)', req.url, path.extname(req.url));
  await sendFile(
    res,
    req,
    path.extname(req.url),
    path.join(__dirname, './dist', req.url),
  );
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on port ${port}, ${domain}:${port}`);
});
