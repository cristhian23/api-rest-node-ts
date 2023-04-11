import itemModel from "../models/item.model";


const getBlogs = async() => {
   const response = await itemModel.find({});
   return response;
};


export { getBlogs };