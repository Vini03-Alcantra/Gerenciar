import { CreateRendaVariableController } from "../../../../modules/rendasVariable/useCases/CreateRenda/CreateRendaVariableController";
import { ReadRendaVariableController } from "../../../../modules/rendasVariable/useCases/ReadRenda/ReadRendaVariableController";
import {TotalRendaVariableController} from "../../../../modules/rendasVariable/useCases/TotalRendaVariable/TotalRendaVariableController"

import { Router } from "express";

const rendaVariableRouter = Router()

const createRendalVariable = new CreateRendaVariableController()
const readRendaVariableController = new ReadRendaVariableController()
const totalRendaVariableController = new TotalRendaVariableController()

rendaVariableRouter.post("/", createRendalVariable.handle)
rendaVariableRouter.get("/", readRendaVariableController.handle)
rendaVariableRouter.get("/total", totalRendaVariableController.handle)

export {rendaVariableRouter}