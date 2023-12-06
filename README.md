# Backend-To-upload-mediafiles-in-cloudinary
It is a Node JS server application that allows users to upload images and videos to the server . It uses Express JS and the Express File Uploader middleware to handle file uploads. 
The uploaded files are the stored on Cloudinary, a cloud-based image and video management service. The application also sends and email to the user who uploaded the file, containing a
link to the uploaded file. The email service is carried out using Nodemailer.

## There are four routes to this application
  1. **/localFileUpload** :- This route is for uploading the file in your own local desktop.
  2. **/uploadImage** :- This route is for uploading your image to Cloudinary.
  3. **/videoUpload** :-This routes uploads your desired video to Cloudinary.
  4. **/imageReducer** :- This route is for uploading your image in lesser size by decreasing the quality of the image.

## Setup of dotenv
 The variables used in dotenv for the configuration are, 
 ```URL``` :- The database connection string to make connection.
 ```PORT``` :- The port number in which your server is listening.
```CLOUD_NAME,API_KEY,API_SECRET``` :- The following variables will by given to your when you register in Cloudinary they are useful to configure cloudinary.
```MAIL_HOST``` :- The mail host service you are using for nodemailer for example , **smtp.gmail.com**.
```MAIL_USER``` :- The username of your mail id.
```MAIL_PASS``` :- The password of your mail id. If you are using gmail as host then you need follow the below steps :-
                   1. Go to manage your google Account.
                   2. Go to Security.
                   3. Go to two factor authentication.
                   4. In the end you can see generate password for app by this you'll get your desired password.
 
