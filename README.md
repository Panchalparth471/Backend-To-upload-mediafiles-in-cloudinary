# Backend-To-upload-mediafiles-in-cloudinary
It is a Node JS server application that allows users to upload images and videos to the server . It uses Express JS and the Express File Uploader middleware to handle file uploads. 
The uploaded files are the stored on Cloudinary, a cloud-based image and video management service. The application also sends and email to the user who uploaded the file, containing a
link to the uploaded file. The email service is carried out using Nodemailer.

## There are four routes to this application
  1. **/localFileUpload** :- This route is for uploading the file in your own local desktop.
  2. **/uploadImage** :- This route is for uploading your image to Cloudinary.
  3. **/videoUpload** :-This routes uploads your desired video to Cloudinary.
  4. **/imageReducer** :- This route is for uploading your image in lesser size by decreasing the quality of the image.
