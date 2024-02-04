const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routerUser =  require("./routes/users");
const routerAuth =  require("./routes/auth");
const routerPost =  require("./routes/posts");

dotenv.config();
// mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to db")).catch(
//     ()=>console.error("error")
// )


mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",routerUser);
app.use("/api/auth",routerAuth);
app.use("/api/posts",routerPost);



app.listen(8800, () =>{
    console.log("Backend server is running!");
});