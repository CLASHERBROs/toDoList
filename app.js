// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
var day;
app.get("/",function(req,res){
   var today = new Date();
switch(today.getDay())
{case 1: day = "Monday";
    break;
case 2: day = "Tuesday";
    break;
case 3:day = "Wednesday";
    break;
case 4:day = "Thursday";
    break;
case 5:day = "Friday";
    break;
case 6:day = "Saturday";
    break;
case 0:day = "Sunday";
    break;

}
   res.render("list",{kindOfDay:day});

});


app.listen(3000,function(){
    console.log("running");
});

