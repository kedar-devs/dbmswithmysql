
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kedar",
    database: "Sailors"
  });


con.connect(function(err) {
    
    if (err) throw err;
    console.log("Connected!");
    
  });
  module.exports=con


