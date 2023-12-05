const File = require("../Models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {

    try {
        const file = req.files.file;
        console.log(file);
        let path = __dirname + "/files/" + Date.now() +`.${file.name.split('.')[1]}`;
        file.mv(path, (err) => {
            console.log(err);
            res.json({
                success: true,
                message:"File Uploaded Successfully"
            })
        });

        
    }

    catch (e) {
        console.log(e);
    }

}

async function uploadFileToCloudinary(file, folder,quality) {
    const options = { folder };

    
    if (quality)
    {
        options.quality = quality;
    }
    //tempFilePath is defined in index.js in fileUpload
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.uploadImage = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        //Checking for supported types
        const supportedTypes = ["jpg", "png", "jpeg"];

        //Removing file extension from the file name
        const fileType = `${file.name.split('.')[1]}`.toLowerCase();

        if (!supportedTypes.includes(fileType))
        {
            res.status(400).json({
                success: false,
                message:"File format not supported"
           })
        }
        
        //If file format is supported then upload to cloudinary
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        //Db me entry save krni hai
        const fileData = await File.create({ name, file, tags, imageUrl: response.secure_url });

        res.json({
            success: true,
            message: "Image successfully uploaded",
            imageUrl:response.secure_url
        });

    }

    catch (e)
    {
        console.error(e);
        res.status(400).json({
            success: false,
            message:"Something went wrong"
        })
    }
}



exports.videoUpload = async (req, res) => {

    try {
         const { name, tags, email } = req.body;
        const file = req.files.videoFile;

        //Checking for supported types
        const supportedTypes = ["mp4", "mov"];

        //Removing file extension from the file name
        const fileType = `${file.name.split('.')[1]}`.toLowerCase();

        if (!supportedTypes.includes(fileType))
        {
            res.status(400).json({
                success: false,
                message:"File format not supported"
           })
        }
        
        //If file format is supported then upload to cloudinary
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        //Db me entry save krni hai
        const fileData = await File.create({ name, file, tags, imageUrl: response.secure_url });

        res.json({
            success: true,
            message: "Video successfully uploaded",
            imageUrl:response.secure_url
        });

    }

    catch (e)
   {
        console.error(e);
        res.status(400).json({
            success: false,
            message:"Something went wrong"
        })
    }

    


}

exports.imageReducer = async (req, res) => {
    try {
         const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        //Checking for supported types
         const supportedTypes = ["jpg", "png", "jpeg"];

        //Removing file extension from the file name
        const fileType = `${file.name.split('.')[1]}`.toLowerCase();

        if (!supportedTypes.includes(fileType))
        {
            res.status(400).json({
                success: false,
                message:"File format not supported"
           })
        }


       //If file format is supported then upload to cloudinary
        const response = await uploadFileToCloudinary(file, "Codehelp",90);
        console.log(response);

        
         //Db me entry save krni hai
        const fileData = await File.create({ name, file, tags, imageUrl: response.secure_url });

        res.json({
            success: true,
            message: "Image successfully uploaded",
            imageUrl:response.secure_url
        });
    }

    catch (e)
    {
       console.error(e);
        res.status(400).json({
            success: false,
            message:"Something went wrong"
        })
    }
}


/* Logical steps for image upload 
 1) fetch data and file from request.
 2) check if file format is correct.
 3) upload the file to cloudinary.
 4) Create the entry for file in database.

 basically yaha pe 3 step hote hai
 1)client se file temporary server mai store hogi
 2)server se cloudinary pe upload hogi aur database me entry
 3)server se delete hojaegi


 Logical steps for video upload
 1)fetch the data and file from request.
 2)check file format
 3)upload to cloudinary
 4)Create the entry for file in database
*/