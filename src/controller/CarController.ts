import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { CarItem } from "../entity/CarItem";

export class CarController{

    private carRepository = getRepository(CarItem);

    async all(req: Request, res: Response, next: NextFunction) {
        return this.carRepository.find();
    }

}