import { AuthenticatePersonController } from "../../../../modules/person/useCases/authenticatePerson/AuthenticatePersonController";

import { Router } from "express";

const authenticatePersonController = new AuthenticatePersonController()

const authenticatePersonRoute = Router()

authenticatePersonRoute.post("/sessions", 
    /*
        #swagger.description = 'Route for user authentication.'
    */
    authenticatePersonController.handle    
)
 

export {authenticatePersonRoute}