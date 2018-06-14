
var fs = require('fs');

// this is asyn so configFile will be null
var configFile =  fs.readFile('./config.json',handleFile);
var configFile1 =  JSON.parse(fs.readFileSync('./config.json','utf-8'));


function handleFile(err,data){
  if (err) throw err
  configFile = JSON.parse(data);
  console.log(configFile);

}
// shows null
configFile;
