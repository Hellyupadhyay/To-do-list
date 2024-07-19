
const express = require("express");
const bodyParser=require("body-parser");

const app=express();
var items=[];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",function(req,res){
var today = new Date();
var options={
  weekday: "long",
  day:"numeric",
  month:"long"
};
var date=today.toLocaleDateString("en-US",options);
res.render("list",{kindOfDay:date, newlistItem: items,n: items.length});
});

app.post("/",function(req,res){
  item=req.body.newitem;
  items.push(item);
  res.redirect("/");
})

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000,function(){
  console.log("server is running on port 3000");
});
