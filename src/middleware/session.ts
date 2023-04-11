import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = (req:RequestExt, res:Response, next:NextFunction) =>{
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); 
        const isUser = verifyToken(`${jwt}`);
        if(!isUser){
            res.status(401).send("YOU_DO_NOT_HAVE_VALID_JWT");
        }else{
            req.user = isUser;
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("SESSION_NOT_VALID");
    }
};

export { checkJwt }