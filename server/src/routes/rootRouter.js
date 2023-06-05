import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import gameRouter from "./api/v1/gameRouter.js";
import RawgApiRouter from "./api/v1/RawgApiRouter.js";
import voteRouter from "./api/v1/voteRouter.js";
import searchRouter from "./api/gameSearchRouter.js";
import gameOfferRouter from "./api/v1/gameOfferRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/games", gameRouter);
rootRouter.use("/api/v1/rawg-games", RawgApiRouter)
rootRouter.use("/api/v1/votes", voteRouter)
rootRouter.use("/api/v1/search", searchRouter)
rootRouter.use("/api/v1/games/:id/offers", gameOfferRouter);

//place your server-side routes here

export default rootRouter;
