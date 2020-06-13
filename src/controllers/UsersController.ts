import { Request, Response } from 'express';

import UsersServices from '../services/UsersServices';

const usersServices = new UsersServices();

export default class UsersController{
    index (request : Request, response : Response) {
        usersServices.index({ request, response });
    }
    show (request : Request, response : Response){
        usersServices.show({ request, response });
    }
    create (request : Request, response : Response){
        usersServices.create({request, response});
    }
}