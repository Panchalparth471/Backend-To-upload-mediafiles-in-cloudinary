const express = require("express");
const app = express();

//For local file upload in server
const fileUpload = require("express-fileupload");
//For uploading files temporarily in our server
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'/tmp/'
}))

app.use(express.json());
require("dotenv").config();

const { database } = require("./Config/database");

//For connecting to cloudinary and cloud file upload
const cloudinary = require("./Config/cloudinary");

//Mounting routes to the app
const upload = require("./Routes/routes");
app.use("/api/v1/upload", upload);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})

app.get("/", (req, res) => {
    return res.send('<h1>This is homepage</h1>')
})

cloudinary.cloudinaryConnect();
database();
