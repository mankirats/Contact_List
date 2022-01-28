const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello ");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("I think you are lost");
    res.end();
  }
});

server.listen(5001, () => {
  console.log("sever running at port 5001");
});
