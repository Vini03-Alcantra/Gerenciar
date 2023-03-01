import { Router } from "express";

import { CreatePersonController } from "../../../../modules/person/useCases/createPerson/CreatePersonController";
import { ReadPersonController } from "../../../../modules/person/useCases/ReadPerson/ReadPersonController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const personRouter = Router()
const createPersonController = new CreatePersonController()
const readPersonController = new ReadPersonController()

personRouter.post(
    "/",     
    /*
        #swagger.description = 'Route for person. you can insert the data of your person_dependent'
    */
    createPersonController.handle
)

personRouter.get(
    "/",
    /*
        #swagger.description = 'Route for person_dependent. you can get person'
    */
    ensureAuthenticated,
    readPersonController.handle
)

export {personRouter}