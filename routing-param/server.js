const http = require("http");
const url = require("url");
//url looks like, http://localhost:3000/product/:2 or http://localhost:3000/product/101
const httpHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);
  const pathName = passedUrl.pathname; //product/101
  //spilt the pathName
  const pathComponent = pathName.split("/").filter(Boolean);
  const productId = pathComponent[1];
  if (pathComponent[0] === "product" && productId) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`Product Page -${productId}`);
    res.end();
  }
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
