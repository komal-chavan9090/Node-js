const express=require("express")

const app=express();
const sendMail=require("./controllers/send");


app.get("/",(req,res)=>{
    res.send("i am komal");
});

app.get("/sendmail",sendMail);

const start= async()=>{
    try{
        app.listen(5000,()=>{
             console.log("I am live")
        });
    }catch(error){}
};
start();
console.log("hii")
