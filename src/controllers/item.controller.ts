import {Request, Response} from "express"
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItem = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await getCar(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}
const getItems = async (req:Request, res:Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const postItem = async ({ body}: Request, res:Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const updateItem = async(req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await updateCar(id, req.body);
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const response =  await deleteCar(id);
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };