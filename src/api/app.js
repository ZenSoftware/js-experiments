const http = require('http');

const port = 7080;
const host = 'localhost';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  const body = { message: 'Hello world!' };
  res.end(JSON.stringify(body));
});

server.listen(port, host, () => console.log(`Listening on http://${host}:${port}`));
