// npm run dev
const express=require("express");
const connectDB = require("./config/connectDB");
const { use } = require("./router/User");
// ================================================================
const app = express();
require("dotenv").config();
// connexion with DB
connectDB();
// ===============================================================
// route
//pour lire req.body il faut ajouter un middleware globale avant les routes pour lire json type bodyParser()
app.use(express.json());
// en va créer un middleware (global) pour User routes
app.use("/api/User",require("./router/User"));

// ================================================================
// install dev dependency : npm i -d dotenv
const PORT=process.env.PORT;
app.listen(PORT,(err)=>err?console.log(err):console.log(`server is running on port : ${PORT}`))