const http = require("http");

const httpHandler = (req, res) => {
  const data = {
    name: "Kalaiselvi",
    role: "MERN Stack Developer",
    skills: ["JavaScript", "React", "Node.js"],
  };

  //set the response header to application/json, convert string value to JSON String
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
