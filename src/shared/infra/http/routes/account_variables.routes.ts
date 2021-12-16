import { Router } from "express";
import { CreateAccountVariableController } from "modules/AccountVariable/useCases/CreateAccountVariable/CreateAccountVariableController";

const accountVariableRouter = Router()

const createAccountVariable = new CreateAccountVariableController()

accountVariableRouter.post("/", createAccountVariable.handle)

export {accountVariableRouter}