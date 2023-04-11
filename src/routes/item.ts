import { Router, Request, Response } from "express";
import { 
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem 
} from "../controllers/item.controller";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", logMiddleware, checkJwt, getItems);

router.get("/:id", logMiddleware, checkJwt, getItem);

router.put("/:id", logMiddleware, checkJwt, updateItem);

router.delete("/:id", logMiddleware, checkJwt, deleteItem);

router.post("/", logMiddleware, checkJwt, postItem);

export { router };