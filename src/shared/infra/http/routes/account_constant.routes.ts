import { Router } from "express";
import { CreateAccountConstantController } from "../../../../modules/AccountConstant/useCases/CreateAccountConstant/CreateAccountConsntantController";

const accountRouter = Router()

const createAccountConstant = new CreateAccountConstantController()

accountRouter.post("/", createAccountConstant.handle)

export {accountRouter}