import { Router } from "express";
import { CreateAccountVariableController } from "../../../../modules/AccountVariable/useCases/CreateAccountVariable/CreateAccountVariableController";
import { ReadAccountVariableController } from "../../../../modules/AccountVariable/useCases/ReadAccountVariable/ReadAccountVariableController";
import { ReadTotalValueVariableController } from "../../../../modules/AccountVariable/useCases/ReadTotalValueVariable/ReadTotalValueVariableController";

const accountVariableRouter = Router()

const createAccountVariable = new CreateAccountVariableController()
const readAccountVariableController = new ReadAccountVariableController()
const readTotalValueVariableController = new ReadTotalValueVariableController()

accountVariableRouter.post("/", createAccountVariable.handle)
accountVariableRouter.get("/", readAccountVariableController.handle)
accountVariableRouter.get("/total", readTotalValueVariableController.handle)

export {accountVariableRouter}