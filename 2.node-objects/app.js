// --- Accessing the global object ---

global.myGlobal = "Hello from Global Objects";
//console.log(global);
//setTimeout setInterval are global object

//Process Object

//console.log(process);
//environment variables
const appEnv = process.env.APP_NEW || "development";

console.log(`Our Node APP is running ${appEnv}`);

if (process.env.NODE_ENV !== "production") {
  //Display some error
  console.log("This script should be only run in production");
  //process.exit();
}

console.log(`current directory ${process.cwd()}`);
