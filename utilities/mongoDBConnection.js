
// imports
var MongoClient ;
var dbRetainedObj={};

// values
// var configFile =  JSON.parse(fs.readFileSync('../config.json','utf-8'));
// var url =  configFile['dbConnectionAddress'];
// console.log(configFile,url);


//default connection
module.exports = {
  initMongo:function (url,dbName){
     MongoClient = require('mongodb').MongoClient;
     MongoClient.connect(url,function(err,connection){
      if(err) throw err;
      // console.log(dbObj);
      dbRetainedObj["connection"] = connection;
      dbRetainedObj["db"] = db;
      var db = connection.db(dbName);
      // console.log(db);
      db.listCollections().toArray(function(err, collections){
          console.log(collections);
      });
      dbretainedObj = db;
  // closeMongoConnections:function(){
      // connection.close();
    });
  },
  insertCollection:function (object,collectionName){
    dbRetainedObj["db"].collection(collectionName).insertOne(object,function(err,res){
      if(err) throw err;
      console.log("1 inserted");
    });
  }
  closeMongoConnections:function(){
      connection.close();
  }
};
