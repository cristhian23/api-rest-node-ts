import { Car } from "../interfaces/car.interface";
import itemModel from "../models/item.model";

const insertCar = async (item: Car) => {
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};

const getCars = async () => {
    const response = await itemModel.find({});
    return response;
};

const getCar = async (id: string) => {
    const response = await itemModel.findOne({_id: id});
    return response;
};

const updateCar = async (id: string, data:Car) => {
    const response = await itemModel.findOneAndUpdate({_id: id}, data, {new: true});
    return response;
};

const deleteCar = async (id: string) => {
    const response = await itemModel.deleteOne({_id: id});
    return response;
};
export { insertCar, getCars, getCar, updateCar, deleteCar };