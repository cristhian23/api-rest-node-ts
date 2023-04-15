import { Model } from "mongoose";

export class BaseService<T> {
    private model: Model<T>;
  
    constructor(model: Model<T>) {
      this.model = model;
    }
  
    async create(data: Partial<T>): Promise<T> {
      return this.model.create(data);
    }
  
    async findById(id: string): Promise<T | null> {
      return this.model.findById(id).exec();
    }
  
    async findAll(): Promise<T[]> {
      return this.model.find({}).exec();
    }
  
    async updateById(id: string, data: Partial<T>): Promise<T | null> {
      return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }
  
    async deleteById(id: string): Promise<T | null> {
      return this.model.findByIdAndDelete(id).exec();
    }
  }
  