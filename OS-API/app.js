const os = require("os");
console.log("CPU Architecture", os.arch());
console.log("CPU Info", os.cpus());
console.log(os.endianness());
console.log("Free memory", os.freemem());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
