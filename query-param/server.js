const http = require("http");
const url = require("url");
//url looks like, http://localhost:3000/product/laptop?type=macos&year=2034&price=4000 -- 	After ? in the URL, use case:Filter/search/sort data

const httpHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);

  const queryParameter = passedUrl.query;

  //queryParameter value is 'type=macos&year=2034&price=4000'
  res.writeHead(200, { "Content-TYpe": "text/plain" });
  res.write("Welcome");
  res.end();
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
