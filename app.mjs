import * as http from "http";

const server = http.createServer((req, res) => {
  res.write("Welcome to My Node Server Page");
  res.end();
});

server.listen(5001);
