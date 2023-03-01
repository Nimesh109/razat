//Importing express from package.json.
const express = require("express");
//Initializing the express functions to app variable.
const app = express();

const cors = require("cors");

const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../app-frontend/src/components/banquet-Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//Importing auth.js file from routes folder.
const auth = require("./routes/auth");

//Importing banquet.js file from routes folder.
const banquet = require("./routes/banquet");

//Acceping the incomming request object as a json object.
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//Acceping the incomming request object as  String or arrays.
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));
//Initializing all the routes from auth as a middleware in the server.
app.use("/", auth);

//Initializing all the routes from banquet.js as a midddleware in the server.
app.use("/", upload.single("image"), banquet);

//Importing connectDB function from db folder.
const connectDB = require("./db/connect");

//Importing dotenv and configuring the dotenv in the project.
require("dotenv").config();

//Initializing the port value.
const port = 8000 || process.env.PORT;

//Connecting to database and starting the server.
const start = async () => {
  try {
    //Connecting to the server.
    await connectDB(process.env.MONGO_URL);
    //Starting the server on port 8000.
    app.listen(port, () => {
      console.log(`Listening to ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

//Calling the start function and starting the server.
start();
