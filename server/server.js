const express=require("express");
const app=express();
const session=require("express-session")
const config=require('./config/config')

const helmet = require("helmet");
app.use(helmet());


const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use((session({
secret:"ABCDefg",
resave:false,
saveUninitialized:true
})))






const user = require("./routes/user");
const booking = require("./routes/booking");
const vehicle = require("./routes/vehicle");
const admin = require("./routes/admin");
const availablevehicle = require("./routes/availablevehicle");
const bookedvehicle = require("./routes/bookedvehicle");
const useraccount = require("./routes/useraccount");
const payment = require("./routes/payment");


// Routes



app.use("/api/user", user);
app.use("/api/booking", booking);
app.use("/api/vehicle", vehicle);
app.use("/api/admin", admin);
app.use("/api/availablevehicle", availablevehicle);
app.use("/api/bookedvehicle", bookedvehicle);
app.use("/api/useraccount", useraccount);
app.use("/api/payment", payment);








  
app.listen(3001,()=>{
console.log("server running on port 3001");

});