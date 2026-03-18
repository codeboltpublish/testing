const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/hello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hey\n");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
