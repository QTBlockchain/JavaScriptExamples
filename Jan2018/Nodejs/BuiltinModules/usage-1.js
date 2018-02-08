var os = require('os');
var process = require('process');
console.log(process.arch);
console.log("hostname: "+os.hostname());

var cpuInfos=os.cpus();
for (let index = 0; index < cpuInfos.length; index++) {
    var cpuInfo = cpuInfos[index];
    //console.log(cpuInfo);
    console.log("Model: "+cpuInfo.model);
    console.log("speed: "+cpuInfo.speed);
}