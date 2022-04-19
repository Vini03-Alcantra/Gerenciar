import { CreateRendaVariableController } from "../../../../modules/rendasVariable/useCases/CreateRendaVariableController";

import { Router } from "express";

const rendaVariableRouter = Router()

const createRendalVariable = new CreateRendaVariableController()


rendaVariableRouter.post("/", createRendalVariable.handle)

export {rendaVariableRouter}