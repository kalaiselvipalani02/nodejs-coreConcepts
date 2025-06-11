const http = require("http");
const url = require("url");
//mimic database - employee
const employees = [
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Agnes" },
];
const httpHandler = (req, res) => {
  const { method, url } = req;

  const parts = url.split("/");
  const id = parts[2];

  //!Get all employees
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(employees));
    res.end();
  }
  //single employee id
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => {
      return emp.id === parseInt(id);
    });

    if (employee) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(employee));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Employee not found" }));
      res.end();
    }
  }

  //!Create new employee
  else if (method === "POST" && url === "/employees") {
    console.log("POST");
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    //send the response
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      employees.push(newEmployee);
      console.log(employees);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          newEmployee: newEmployee,
          employees: employees,
        })
      );
      res.end();
    });
  }
};

const server = http.createServer(httpHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
