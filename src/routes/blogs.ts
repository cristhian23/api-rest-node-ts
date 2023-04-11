import { Router } from "express";
import { getItems } from "../controllers/blog.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt, getItems);

export { router };