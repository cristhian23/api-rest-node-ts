import {Request, Response} from "express"
import { handleHttp } from "../utils/error.handle";
import { getBlogs } from "../services/blog.service";
import { RequestExt } from "../interfaces/requestExt.interface";


const getItem = (req:Request, res:Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}
const getItems = async (req:RequestExt, res:Response) => {
    try {
        const response = await getBlogs();
        res.send({data: response, user: req.user});
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

const postItem = ({ body}: Request, res:Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_BLOG');
    }
}

const updateItem = (req:Request, res:Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_BLOG');
    }
}

const deleteItem = (req:Request, res:Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };