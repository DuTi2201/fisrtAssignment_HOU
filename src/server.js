import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web";

const app = express();

//config view engine
configViewEngine(app);
//init wweb routes
initWebRouters(app);

const PORT = 8080;
app.listen(PORT), () => {
    console.log("...JWT running on port=" + PORT);
}