const express = require("express");
const { adduser } = require("../controller/dbOperations");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();



router.post("/add", async (req, res) => {
    let details = req.body;
    
    try {
      let data = await dbOperations.adduser(details);
      if (data) return res.status(200).json({ msg: "User added" });
      res.status(400).json({ error: "FATAL ERROR: not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = router;

  //
  router.get("/get", async (req, res) => {
    try {
       await dbOperations.getuser().then(data=>{
        res.render("../views/userinput.ejs",{pageTitle:adduser,path:"/get",data:data});
       }).catch(err=>console.log(err));
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;