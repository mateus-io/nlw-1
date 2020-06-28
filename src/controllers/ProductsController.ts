import { Request, Response } from 'express';

import ProductsServices from '../services/ProductsServices';

const productsServices = new ProductsServices();

export default class ProductsController {
    index (request : Request, response : Response){
        productsServices.index({request, response});
    }
}