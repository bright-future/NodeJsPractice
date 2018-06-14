
//imports
var fs = require("fs");
var grpc = require('grpc');
var databaseconnectionObj = require("./utilities/mongoDBConnection");
var configFile =  JSON.parse(fs.readFileSync('./config.json','utf-8'));


var PROTO_PATH = configFile["ProtoPath"]+"maths.proto";
var mathsProto = grpc.load(PROTO_PATH); //whole book proto is present here

/**
 * Implements the SayHello RPC method.
 */
function additionServiceHandler(call, callback) {
  // because error is null so null
  if(call.response !=null){
    var a = call.response.var1;
    var b = call.response.var2;
    callback(null, {var1:a+b});
  }
  else{
    callback(new Error('Invalid request'));
  }
}


console.log(databaseconnectionObj)



function main(){
  // database connections
  databaseconnectionObj.initMongo(configFile["dbConnectionAddress"]
                            ,configFile["database"]);
  var Server = new grpc.Server();
  Server.addService(mathsProto.books.additionService.service, additionServiceHandler);
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  console.log('grpc server running on port:', '0.0.0.0:50051');
  server.start();
}
