const nodemailer=require("nodemailer")

const sendMail=async(req,res)=>{
    let testAcc=await nodemailer.createTestAccount();

    let transporter=await nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user: 'elyssa.brown@ethereal.email',
            pass: 'pjESjug2ysn2YexEua'
        }
    });

    let info=await transporter.sendMail({
       from:' "komal chavan" <komal.chavan@walchandsangli.ac.in> ',
       to:"kc8781686@gmail.com",
       subject:"Hello bk",
       text:"Hellooooo",
       html:"<b>I am mortal</b>"
    });

    res.send("I am sendin mail")
};


module.exports=sendMail;