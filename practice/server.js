const http = require("http");
const url = require("url");

const httpHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);

  const queryParameter = passedUrl.query;

  console.log(queryParameter);
  //url : http://localhost:3000/user/:id
  const data = {
    id: 1,
    name: "Kalaiselvi",
    role: "MERN Stack Developer",
    skills: ["JavaScript", "React", "Node.js"],
  };
  if (Object.keys(queryParameter).length === 0) {
    //set the response header to application/json
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Using query Parameter");
    res.end();
  }
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
