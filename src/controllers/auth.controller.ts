import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerCtrl =async ({body}: Request, res: Response) => { 
    try {
        const resposeUser = await registerNewUser(body);
        res.send(resposeUser);
    } catch (error) {
        handleHttp(res, "ERROR_REGISTER", error);
    }
}

const loginCtrl =async ({body}: Request, res: Response) => {
    try {
        const response = await loginUser(body);
        if(response === "PASSWORD_INCORRECT"){
            res.status(403);
            res.send(response);
        }
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_LOGIN", error)
    }
}

export { registerCtrl, loginCtrl };