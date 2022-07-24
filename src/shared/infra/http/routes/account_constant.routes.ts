import { Router } from "express";
import { CreateAccountConstantController } from "../../../../modules/AccountConstant/useCases/CreateAccountConstant/CreateAccountConstantController";
import { ReadAccountConstantController } from "../../../../modules/AccountConstant/useCases/ReadAccountConstant/ReadAccountConstantController";
import { ReadTotalValueAccountConstantController } from "../../../../modules/AccountConstant/useCases/ReadTotalValueAccount/ReadTotalValueAccountConstantController";

const accountRouter = Router()

const createAccountConstant = new CreateAccountConstantController()
const readAccountConstantController = new ReadAccountConstantController()
const readTotalValueAccountConstantController = new ReadTotalValueAccountConstantController()

accountRouter.post("/", createAccountConstant.handle)
accountRouter.get("/", readAccountConstantController.handle)
accountRouter.get("/total", readTotalValueAccountConstantController.handle)

export {accountRouter}