const express = require('express');
const app = express();
const db_con = require('../config/databse')
const use = express();
const { encrypt,compare } = require('../services/bycrypt');

let userController = {};
// userController.createuser=async function(req,res){
//   let tablename='emp1';
//   let sqlQuery=`CREATE TABLE ${tablename}(
//     name VARCHAR(255),address VARCHAR(255)
//   )`;
//   db_con.query(sqlQuery,(err)=>{
//     if(err)return res.status(500)
//     .send("table creation failed");
//     return res.send(`successfully created table -${tablename}`);
//   })
// };
// userController.insertuser = async function (req, res) {
//   let user = req.body;
//   console.log(user);
//   user.Password = encrypt(user.Password);
//   console.log(":::::::::::::user::::::::", user);
//   let sqlQuery = `INSERT INTO user1( firstName,lastName,password)VALUES('${user.firstName}','${user.lastName}','${user.Password}');`
//   db_con.query(sqlQuery, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted", result);
//     res.send(result);
//   });
// };
// userController.getuser = async function (req, res) {
//   let user = req.body;
//   console.log(user);
//   let sqlQuery = `select * from user1`;
//   db_con.query(sqlQuery, function (err, result) {
//     if (err) throw err;
//     console.log("datadisplay", result);
//     res.send(result);
//   })
// };
userController.updateuser = async function (req, res){
  let user=req.body.user;
  let password=req.body;
  let sqlQuery='select *from user1 ORDER BY userid';
  db_con.query(sqlQuery,async function(err,result){
    if(err)throw err;
    console.log("get record",result,result[0]);
    user.password=encrypt(user.password)
    console.log(":::::::::::::::::::::password",user);
    let check=await compare(user.old_password,result[0].password);
    console.log(check);
    if(err){
      
    }

  })
 


}

//   let user = req.body;
//   console.log(user);
//   let sqlQuery = `select * from user1 ORDER BY userid `;
//   db_con.query(sqlQuery, function (err, result) {
//     if (err) throw err;
//     console.log("data display", result);
//     res.send(result);
//     let findQuery = `update user1 SET firstName = '${user.newname}' WHERE userid='${user.userid}' and password = ;`
//     db_con.query(findQuery, function (err, result) {
//       if (err) throw err;
//       console.log("update data", result);
//       res.send(result);
//     })

//   })
// };
 



module.exports = userController;    