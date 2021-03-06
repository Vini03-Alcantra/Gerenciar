import { Router } from "express";

import { CreatePersonController } from "../../../../modules/person/useCases/createPerson/CreatePersonController";
import { ReadPersonController } from "../../../../modules/person/useCases/ReadPerson/ReadPersonController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const personRouter = Router()
const createPersonController = new CreatePersonController()
const readPersonController = new ReadPersonController()

personRouter.post(
    "/",     
    createPersonController.handle
)

personRouter.get(
    "/",
    ensureAuthenticated,
    readPersonController.handle
)

export {personRouter}