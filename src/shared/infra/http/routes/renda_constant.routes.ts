import { Router } from "express";
import { CreateRendaContantController } from "modules/rendasConstant/useCases/CreateRendaConstantController";

const rendaConstant = Router()

const createRendaConstant = new CreateRendaContantController()

rendaConstant.post("/", createRendaConstant.handle)

export {rendaConstant}