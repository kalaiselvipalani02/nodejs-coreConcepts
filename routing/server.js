const http = require("http");
const url = require("url");
const httpHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);

  if (passedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Home Page");
  } else if (passedUrl.pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("About page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 - Page nod found");
  }

  res.end();
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
