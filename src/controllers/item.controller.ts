import {Request, Response} from "express"
import { handleHttp } from "../utils/error.handle";
import { BaseService } from "../services/generic.service";
import itemModel from "../models/item.model";

const baseService = new BaseService(itemModel);

const getItem = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await baseService.findById(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}
const getItems = async (req:Request, res:Response) => {
    try {
        const response = await baseService.findAll();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const postItem = async ({ body}: Request, res:Response) => {
    try {
        const responseItem = await baseService.create(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const updateItem = async(req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await baseService.updateById(id, req.body);
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await baseService.deleteById(id);
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };