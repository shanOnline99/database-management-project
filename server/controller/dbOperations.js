const mysql = require("mysql");
var config = require("../config/config");
const bcrypt=require("bcrypt");
const { join } = require("path");
const Joi = require("joi");
const e = require("express");

// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});

// insert user
function adduser(details) 
{
  return new Promise(async (resolve, reject) => {
    let {id,dob,email,NIC,fname,lname,contactNo,address,city,date} =
      details;
    console.log(details);
  let sql = `INSERT INTO user(id,dob,email,NIC,fname,lname,contactNo,address,city,date   )
    VALUES('${details[0].id}','${details[0].dob}','${details[0].email}','${details[0].NIC}','${details[0].fname}','${details[0].lname}','${details[0].contactNo}','${details[0].address}','${details[0].city}','${details[0].date}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from adduser"));
    });
          });

  
}

// get user details
function getuser() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM user`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from getUser info"));
    });
  });
}


// add a booking
function addbooking(details) 
{
  return new Promise(async (resolve, reject) => {
    let { id,formdate,todate,status,userid,vehicleid } =
      details;
    console.log(details[0].fromdate)
  let sql = `INSERT INTO booking(id,fromdate,todate,status,userid,vehicleid)
    VALUES('${details[0].id}','${details[0].fromdate}','${details[0].todate}','${details[0].status}','${details[0].userid}','${details[0].vehicleid}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from add booking"));
    });
          });

  
}

// get booking details
function getbooking() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM booking`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("not get info"));
    });
  });
}

// delete booking details
function deletebooking() {
  return new Promise((resolve, reject) => {
    sql = `SELECT booking where id= ?'`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("not delete info"));
    });
  });
}






// add vehicles
function addvehicle(details) 
{
  return new Promise(async (resolve, reject) => {
    let { vehicleid,userid,brand,model,overview,fueltype,ac,registeryear,airbags,image,priceforday,seats } =
      details;
    //console.log(details[0].brand)
  let sql = `INSERT INTO user(id,dob,email,NIC,fname,lname,contactNo,address,city,date)
    VALUES('${details[0].vehicleid}','${details[0].userid}','${details[0].brand}','${details[0].model}','${details[0].overview}','${details[0].fueltype}','${details[0].ac}','${details[0].registeryear}','${details[0].airbags}','${details[0].image}','${details[0].priceforday}','${details[0].seats}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from addvehicle"));
    });
          });

  
}







// get vehicle info
function getvehicle() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM vehicle`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from getvehicle info"));
    });
  });
}


// insert admin details
function addadmin(details) 
{
  return new Promise(async (resolve, reject) => {
    let { id,username,email,fname,lname} =
      details;
    
  let sql = `INSERT INTO admin(id,username,email,fname,lname)
    VALUES('${details[0].id}','${details[0].username}','${details[0].email}','${details[0].fname}','${details[0].lname}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from addadmin"));
    });
          });

  
}

// get admin details
function getadmin() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM admin`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from get admin info"));
    });
  });
}


// insert available vehicles
function addAvailable(details) 
{
  return new Promise(async (resolve, reject) => {
    let { vehicleid } =
      details;
    
  let sql = `INSERT INTO availablevehilce(veicleid)
    VALUES('${details[0].vehicleid}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from add availablevehicle"));
    });
          });

  
}

// get available vehicle details
function getAvailable() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM availablevehicle`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from getUser info"));
    });
  });
}

// insert booked vehicles
function addBooked(details) 
{
  return new Promise(async (resolve, reject) => {
    let { vehicleid } =
      details;
    
  let sql = `INSERT INTO bookedvehilce(veicleid)
    VALUES('${details[0].vehicleid}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from add bookedvehicle"));
    });
          });

  
}

// get booked vehicle details
function getBooked() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM bookedvehicle`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from get vehicle info"));
    });
  });
}

// insert user acoount
function addAcc(details) 
{
  return new Promise(async (resolve, reject) => {
    let { userid,username,password } =
      details;
    
  let sql = `INSERT INTO bookedvehilce(userid,username,password)
    VALUES('${details[0].userid}','${details[0].username}','${details[0].password}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from add bookedvehicle"));
    });
          });

  
}

// get user account details
function getAcc() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM useraccont`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from get useraccount info"));
    });
  });
}


// insert payment
function addpayment(details) 
{
  return new Promise(async (resolve, reject) => {
    let { id,amount,bookingid, paymentgateway } =
      details;
    
  let sql = `INSERT INTO bookedvehilce(id,amount,bookingid, paymentgateway)
    VALUES('${details[0].id}','${details[0].amount}','${details[0].bookingid}','${details[0].paymentgateway}')`;
              
    db.query(sql, (error, results) => {
      if (error) {
        console.log(error.message);
        resolve(false);
      }
      resolve(true);

      reject(new Error("from add payment"));
    });
          });

  
}

// get payment
function getpayment() {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM payment`;
    db.query(sql, (error, result) => {
      if (error) console.log(error.message);
      resolve(result);
      reject(new Error("from get payment info"));
    });
  });
}

  

  
  module.exports = {
   
    adduser:adduser,
    getuser:getuser,
    addvehicle:addvehicle,
    getvehicle:getvehicle,
    addbooking:addbooking,
    getbooking:getbooking,
    addadmin:addadmin,
    getadmin:getadmin,
    getAvailable:getAvailable,
    addAvailable:addAvailable,
    getBooked:getBooked,
    addBooked:addBooked,
    addAcc:addAcc,
    getAcc:getAcc,
    getpayment:getpayment,
    addpayment:addpayment,
    deletebooking:deletebooking

    

    

  };
  