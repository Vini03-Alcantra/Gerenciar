import { Router } from "express";
import { CreateAccountVariableController } from "../../../../modules/AccountVariable/useCases/CreateAccountVariable/CreateAccountVariableController";
import { ReadAccountVariableController } from "../../../../modules/AccountVariable/useCases/ReadAccountVariable/ReadAccountVariableController";

const accountVariableRouter = Router()

const createAccountVariable = new CreateAccountVariableController()
const readAccountVariableController = new ReadAccountVariableController()

accountVariableRouter.post("/", createAccountVariable.handle)
accountVariableRouter.get("/", readAccountVariableController.handle)

export {accountVariableRouter}