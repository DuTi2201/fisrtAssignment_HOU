import express from "express";
import homeController from '../controller/homeController';
const router = express.Router();

const initWebRouters = (app) => {
    router.get("/", homeController.handleHome);
    router.get("/users", homeController.handleUserPage);
    return app.use("/", router);

}
export default initWebRouters;