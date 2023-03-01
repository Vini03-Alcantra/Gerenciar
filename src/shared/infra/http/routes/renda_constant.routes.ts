import { Router } from "express";
import { CreateRendaContantController } from "../../../../modules/rendasConstant/useCases/CreateRendaConstant/CreateRendaConstantController";
import { ReadRendaContantController } from "../../../../modules/rendasConstant/useCases/ReadRendaConstant/ReadRendaConstantController";
import { TotalRendaConstantController } from "../../../../modules/rendasConstant/useCases/TotalRendaConstant/TotalRendaConstantController";

const rendaConstantRouter = Router()

const createRendaConstant = new CreateRendaContantController()
const readRendaContantController = new ReadRendaContantController()
const totalRendaConstantController = new TotalRendaConstantController()

rendaConstantRouter.post(
    "/", 
    /*
        #swagger.description = 'Route for renda constant. you can insert an renda_constant'
    */
    createRendaConstant.handle
)
rendaConstantRouter.get(
    "/",
    /*
        #swagger.description = 'Route for renda constant. you can get a list of renda_constant'
    */
    readRendaContantController.handle
)

rendaConstantRouter.get(
    "/total", 
    /*
        #swagger.description = 'Route for renda constant. you can get a result of renda_constant'
    */
    totalRendaConstantController.handle
)

export {rendaConstantRouter}