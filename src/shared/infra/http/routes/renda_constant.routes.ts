import { Router } from "express";
import { CreateRendaContantController } from "../../../../modules/rendasConstant/useCases/CreateRendaConstant/CreateRendaConstantController";
import { ReadRendaContantController } from "../../../../modules/rendasConstant/useCases/ReadRendaConstant/ReadRendaConstantController";
import { TotalRendaConstantController } from "../../../../modules/rendasConstant/useCases/TotalRendaConstant/TotalRendaConstantController";

const rendaConstantRouter = Router()

const createRendaConstant = new CreateRendaContantController()
const readRendaContantController = new ReadRendaContantController()
const totalRendaConstantController = new TotalRendaConstantController()

rendaConstantRouter.post("/", createRendaConstant.handle)
rendaConstantRouter.get("/", readRendaContantController.handle)
rendaConstantRouter.get("/total", totalRendaConstantController.handle)

export {rendaConstantRouter}