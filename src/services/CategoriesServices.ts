import { Request, Response } from 'express';

import knex from '../database/connection';

import utils from '../utils/Utils';

export default class CategoriesServices{
    async index({request, response} : { request : Request, response : Response }) {
        const retrieveCategories = await knex('categories').select('*');
        response.json(retrieveCategories);
    }
    async update({request, response} : {request : Request, response : Response}){
        const { id } = request.params;
        const { title, category_image_url, image_offers_url } = request.body;
        const retrieveCategorie = 
            await knex('categories')
                .select('*')
                .where('id', id)
                .first();
        response.json(retrieveCategorie);
    }
    async show({request, response} : {request : Request, response : Response}){
        const { id } = request.params;
        const retrieveCategorie = 
            await knex('categories')
                .select('*')
                .where('id', id)
                .first();
        response.json(retrieveCategorie);
    }
}