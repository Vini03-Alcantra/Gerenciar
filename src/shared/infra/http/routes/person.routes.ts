import { CreatePersonController } from "../../../../modules/person/useCases/createPerson/CreatePersonController";
import { Router } from "express";

const personRouter = Router()

const createPersonController = new CreatePersonController()


personRouter.post("/", createPersonController.handle)

export {personRouter}