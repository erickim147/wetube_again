import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  githubLogin,
  logout,
  postGithubLogIn,
  postJoin,
  postLogin,
  getMe,
} from "../controllers/userController";
import { onlyPrivate, onlyPurblic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPurblic, getJoin);
globalRouter.post(routes.join, onlyPurblic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPurblic, getLogin);
globalRouter.post(routes.login, onlyPurblic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
