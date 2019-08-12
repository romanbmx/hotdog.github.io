const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(path.join(_dirname, 'dist/hotdog')));

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'dist/hotdog/index.html'));
});

const port = process.env.PORT || 4200;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('server sterted ${port}'));
