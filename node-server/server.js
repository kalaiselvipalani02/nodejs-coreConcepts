//Step1: Import required modules
const http = require("http");

//Step2: Define Handler - where to sent the data to client
const requestHandler = (req, res) => {
  //send response

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("About page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 - Page nod found");
  }

  res.end();
};
//Step3: Create the server
const server = http.createServer(requestHandler);
//Step4: Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
