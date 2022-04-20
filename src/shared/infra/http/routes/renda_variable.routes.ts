import { CreateRendaVariableController } from "../../../../modules/rendasVariable/useCases/CreateRenda/CreateRendaVariableController";
import { ReadRendaVariableController } from "../../../../modules/rendasVariable/useCases/ReadRenda/ReadRendaVariableController";

import { Router } from "express";

const rendaVariableRouter = Router()

const createRendalVariable = new CreateRendaVariableController()
const readRendaVariableController = new ReadRendaVariableController()

rendaVariableRouter.post("/", createRendalVariable.handle)
rendaVariableRouter.get("/", readRendaVariableController.handle)


export {rendaVariableRouter}