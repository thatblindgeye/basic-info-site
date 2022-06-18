const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text-html');

  let directory = './';
  let statusCode = 200;

  switch (req.url) {
    case '/':
      directory += 'index.html';
      break;
    case '/about':
      directory += 'about.html';
      break;
    case '/contact-me':
      directory += 'contact-me.html';
      break;
    case '/form':
      directory += 'form.html';
      break;
    default:
      directory += '404.html';
      statusCode = 404;
      break;
  }

  res.statusCode = statusCode;
  fs.readFile(directory, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }

    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
