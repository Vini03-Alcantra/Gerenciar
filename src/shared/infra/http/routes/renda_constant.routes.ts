import { Router } from "express";
import { CreateRendaContantController } from "../../../../modules/rendasConstant/useCases/CreateRendaConstantController";

const rendaConstantRouter = Router()

const createRendaConstant = new CreateRendaContantController()

rendaConstantRouter.post("/", createRendaConstant.handle)

export {rendaConstantRouter}