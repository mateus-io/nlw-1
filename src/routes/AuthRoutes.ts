import { Router } from 'express';

import passport from 'passport';

import AuthController from '../controllers/AuthController';

const authController = new AuthController();

const routes = Router();

routes.post('', authController.authenticate);

routes.get("/google/redirect", passport.authenticate('google'), (request, response) => {
    response.json({status : request.user});
    //response.redirect("/profile");
});

routes.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

export default routes;