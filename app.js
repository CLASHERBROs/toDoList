// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require( __dirname + "/date.js");
var day = date.getDay();

var items = [];
let workItems = [];
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/about",function(req,res){
    res.render("about");
});
app.get("/",function(req,res){


   res.render("list",{listTitle:day,newListItems:items});

});
app.post("/",function (req,res) {
    if(req.body.list == "work"){
      workItems.push(req.body.toDoItem) ;
        res.redirect("/work");
    }
    else{
    items.push(req.body.toDoItem) ;
    res.redirect("/");
    }
  });
  app.get("/work",function(req,res){

   res.render("list",{listTitle:"work",newListItems:workItems});
  });
  
  app.post("/work",function (req,res) {
    workItems.push(req.body.toDoItem) ;
    res.redirect("/work");

  });


app.listen(3000,function(){
    console.log("running");
});

