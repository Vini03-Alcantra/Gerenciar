import { Router } from "express";
import { CreateAccountConstantController } from "../../../../modules/AccountConstant/useCases/CreateAccountConstant/CreateAccountConsntantController";
import { ReadAccountConstantController } from "../../../../modules/AccountConstant/useCases/ReadAccountConstant/ReadAccountConstantController";


const accountRouter = Router()

const createAccountConstant = new CreateAccountConstantController()
const readAccountConstantController = new ReadAccountConstantController()

accountRouter.post("/", createAccountConstant.handle)
accountRouter.get("/", readAccountConstantController.handle)

export {accountRouter}