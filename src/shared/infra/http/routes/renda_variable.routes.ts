import { CreateRendaVariableController } from "../../../../modules/rendasVariable/useCases/CreateRenda/CreateRendaVariableController";
import { ReadRendaVariableController } from "../../../../modules/rendasVariable/useCases/ReadRenda/ReadRendaVariableController";
import {TotalRendaVariableController} from "../../../../modules/rendasVariable/useCases/TotalRendaVariable/TotalRendaVariableController"

import { Router } from "express";

const rendaVariableRouter = Router()

const createRendalVariable = new CreateRendaVariableController()
const readRendaVariableController = new ReadRendaVariableController()
const totalRendaVariableController = new TotalRendaVariableController()

rendaVariableRouter.post(
    "/", 
    /*
        #swagger.description = 'Route for renda variable. you can insert an renda_variable'
    */
    createRendalVariable.handle
)
rendaVariableRouter.get(
    "/", 
    /*
        #swagger.description = 'Route for renda variable. you can get a list of renda_variable'
    */
    readRendaVariableController.handle
)

rendaVariableRouter.get(
    "/total", 
    /*
        #swagger.description = 'Route for renda variable. you can get a result of renda_variable'
    */
    totalRendaVariableController.handle
)

export {rendaVariableRouter}