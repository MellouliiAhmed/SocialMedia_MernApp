const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routerUser =  require("./routes/users");
const routerAuth =  require("./routes/auth");
const routerPost =  require("./routes/posts");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path")


dotenv.config();
// mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to db")).catch(
//     ()=>console.error("error")
// )


mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));


// if you use this images path don't make any request instead just go to this directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",routerUser);
app.use("/api/auth",routerAuth);
app.use("/api/posts",routerPost);
app.use(cors());
app.use(bodyParser.json());



const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "public/images");
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name);
    },
});



const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req,res) =>{
    try{
        return res.status(200).json("File uploaded successfully.");
    }catch(err){
        console.log(err);
    }
})



app.listen(8800, () =>{
    console.log("Backend server is running!");
});