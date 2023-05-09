/* eslint-disable no-console */
const http = require('http');

const todos = [
  {
    id: 1, text: 'Todo One',
  },
  {
    id: 2, text: 'Todo Two',
  },
  {
    id: 3, text: 'Todo Three',
  },
];

const server = http.createServer((req, res) => {
  // returns key value pairs - req headers, url, methods
  const { headers, url, method } = req;
  console.log(`method=${method},  url=${url}, header= ${JSON.stringify(headers)}`);

  // if we open in browser for text/plain then it wont render.
  // change to text/html to render
  // res.setHeader('Content-Type', 'text/html')
  // res.setHeader('Content-Type', 'application/json')
  // res.setHeader('X-Powered-By', 'Node.js')

  // 1. specify content-type as application/json
  // 2. Use Body tab
  // 3. specify raw option
  // 3. add json with double quotes around key and value
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  // Neater representation
  res.writeHead(200, {
    'Content-type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  // res.write("<h1>Hello<h1>")
  // res.write("<h1>Hello Again<h1>")
  // res.write("<h1>Hello Again Again<h1>")
  // allows request to end and return "200" response...

  // res.statusCode = 200

  // We dont need to use res.write and could put it in response
  // instead but we have to make sure we stringify the data first
  // before we send it back.
  res.end(JSON.stringify({
    success: true,
    data: todos,
  }));

  // 400 error response
  // res.end(JSON.stringify({
  //     success: false,
  //     data: null,
  //     error: 'Not Found'
  // }))
});

const PORT = 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
