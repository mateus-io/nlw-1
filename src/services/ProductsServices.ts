import { Request, Response } from 'express';

import knex from '../database/connection';

import Utils from '../utils/Utils';

const utils = new Utils();

export default class ProductServices{
    async index ({request, response} : {request : Request, response : Response}){
        const { categories } = request.query;
        if(!categories){
            const retrieveProducts = await knex('products').select('*');
            return response.json(retrieveProducts);
        }
        const categories_ids = utils.stringToNumberArray(String(categories));
        const retrieveProducts = 
        await   knex('products')
            .join('categories_products', 'products.id', '=', 'categories_products.product_id')
            .whereIn('categories_products.categorie_id', categories_ids)
            .distinct()
            .select('products.*');
        return response.json(retrieveProducts);
    }
}