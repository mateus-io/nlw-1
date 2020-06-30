import { Request, Response } from 'express';

import knex from '../database/connection';

export default class UsersServices {
    /*Users listll*/
    users = [
        'Mateus',
        'Henrique',
        'Supimpa',
        'Legal',
        'Tunel',
        'carrosel',
        'textel'
    ];
    
    async index ({ request, response }: { request: Request; response: Response; }) {
        const retrieveUsers = await knex('users')
                                        .select('*');
        return response.json(retrieveUsers);
        
        /*const { search } = request.query;
        response.json( search === undefined ? 
            this.users : 
            this.users.filter(user => {
                return user.toUpperCase().includes(search.toString().toUpperCase());
        }));*/
    }
    show ({request, response} : { request : Request; response : Response}){
        const { id } = request.params;
        return this.users[Number(id)] ?
            response.json({user : this.users[Number(id)]}) :
            response.status(404).send('Not Found');        
    }
    async create ({ request, response } : { request : Request, response : Response }){
        const { email, password, userName } = request.body;
        const profile_picture = 'http://localhost:3333/uploads/avatarDefault.svg';
        const user = {
            email,
            password,
            userName,
            profile_picture
        }
        let insertedIds = await knex('users').insert(user);
        console.log(insertedIds);
        response.json(user);
    }
}