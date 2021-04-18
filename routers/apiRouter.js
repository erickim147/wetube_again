import express from "express";
import routes from "../routes";
import {
  postAddComment,
  postregisterView,
} from "../controllers/videoController";

const apirouter = express.Router();

apirouter.post(routes.registerView, postregisterView);
apirouter.post(routes.addComment, postAddComment);

export default apirouter;
