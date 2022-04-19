import { Router } from "express";

import { CreatePersonController } from "../../../../modules/person/useCases/createPerson/CreatePersonController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const personRouter = Router()

const createPersonController = new CreatePersonController()


personRouter.post(
    "/", 
    ensureAuthenticated,
    createPersonController.handle
)

export {personRouter}