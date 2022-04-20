import { Router } from "express";
import { CreateRendaContantController } from "../../../../modules/rendasConstant/useCases/CreateRendaConstant/CreateRendaConstantController";
import { ReadRendaContantController } from "../../../../modules/rendasConstant/useCases/ReadRendaConstant/ReadRendaConstantController";

const rendaConstantRouter = Router()

const createRendaConstant = new CreateRendaContantController()
const readRendaContantController = new ReadRendaContantController()

rendaConstantRouter.post("/", createRendaConstant.handle)
rendaConstantRouter.get("/", readRendaContantController.handle)

export {rendaConstantRouter}