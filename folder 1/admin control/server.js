const express=require("express");
const fs=require("fs");

const app=express();

app.use(express.json());
app.use(express.static("public"));


// read database
app.get("/data",(req,res)=>{

const data=fs.readFileSync("database.js","utf8");
res.json(JSON.parse(data));

});


// save new object
app.post("/save",(req,res)=>{

const newData=req.body;

const old=JSON.parse(
fs.readFileSync("database.js","utf8")
);

old.push(newData);

fs.writeFileSync(
"database.json",
JSON.stringify(old,null,4)
);

res.json({
message:"Saved Successfully"
});

});


app.listen(3000,()=>{
console.log("Server Running");
});