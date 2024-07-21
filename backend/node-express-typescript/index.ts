import bodyParser from "body-parser";

const express = require('express')
const app = express() 
app.use(bodyParser.json())

var isLoggedIn : boolean = false;
var isRegistered : boolean = false;
// var fs = require('fs')

// function getLogin(email : String, password: String){
//   for(fs.readfile('logindata.txt')
// }

// Username:Password: ombalar123:sEAo9jHZAenB4Ggv

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Portify',
  password: '12345',
  port: 5432,
})
client.connect(function(err : any) {
  if (err) throw err;
  console.log("Connected!");
});

app.put("/logout", (req : any, res : any) => {
  isLoggedIn = false
  console.log("Logged out")
});

app.get("/checklogin", (req : any,res : any) => {
  res.send({isLoggedIn:isLoggedIn});
  console.log(isLoggedIn)
});

app.post("/login", async (req : any, res : any) => {
  isLoggedIn = false;

  const loginData = await client.query(`Select password FROM "Users" WHERE username = '` + req.body.email +  `'`);

  if(loginData.rows[0] == null){
    isLoggedIn = false;
  }

  else if(req.body.password == loginData.rows[0].password){
    isLoggedIn = true;
    console.log("Logged In")
  }

  else{
    isLoggedIn = false;
    console.log("Login Failed")
  }
  res.json({isLoggedIn:isLoggedIn})
}); 

app.post("/register", async(req : any, res : any) => {
  await client.query(`INSERT INTO "Users"(username, password) VALUES('` + req.body.email + "','" + req.body.password + "')");
});

app.post("/registered", async(req : any, res : any) => {
  console.log("BEfore")
  isRegistered = false;

  const registrationData = await client.query(`Select password FROM "Users" WHERE username = '` + req.body.email +  `'`);

  if(registrationData.rows[0] == null){
    isRegistered = true;
  }
  console.log("AFTER")
  console.log(isRegistered)
  res.json({isRegistered:isRegistered})
  console.log("After")
})
  
app.listen(8000, () => { 
    console.log("listening on http://localhost:8000");
})