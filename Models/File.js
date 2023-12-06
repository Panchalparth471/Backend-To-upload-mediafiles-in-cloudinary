const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
const File = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String
    },
    tags: {
        type:String
    },
    email: {
        type:String
    }
})

//post middleware
File.post("save", async function (doc) {
    try {
        //Transporter for nodemailer
        console.log("DOC ", doc);
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass:process.env.MAIL_PASS,
            },
        })

        //send mail
        let info = await transporter.sendMail({
            from: 'Parth Panchal',
            to: doc.email,
            subject: "New file uploaded in cloudinary",
            html: `<h1>Hello world</h1> <p>File Uploaded</p> View here <a href="${ doc.imageUrl }" >"${doc.imageUrl}"</a>`,
        });
       
        console.log(info);
    }
    catch (e)
    {
        console.error(e);

        
    }
})

module.exports = mongoose.model("File", File);
