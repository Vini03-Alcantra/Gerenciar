import { Router } from "express";
import { CreateAccountVariableController } from "../../../../modules/AccountVariable/useCases/CreateAccountVariable/CreateAccountVariableController";
import { ReadAccountVariableController } from "../../../../modules/AccountVariable/useCases/ReadAccountVariable/ReadAccountVariableController";
import { ReadTotalValueVariableController } from "../../../../modules/AccountVariable/useCases/ReadTotalValueVariable/ReadTotalValueVariableController";

const accountVariableRouter = Router()

const createAccountVariable = new CreateAccountVariableController()
const readAccountVariableController = new ReadAccountVariableController()
const readTotalValueVariableController = new ReadTotalValueVariableController()

accountVariableRouter.post("/", 
    /*
        #swagger.description = 'Route for account_variable. you can insert data of account variable in the system'
    */
    createAccountVariable.handle
)

accountVariableRouter.get("/", 
    /*
        #swagger.description = 'Route for account_variable. you can receive the list of all the accounts'
    */
    readAccountVariableController.handle
)

accountVariableRouter.get(
    /*
        #swagger.description = 'Route for account_variable. you can see the total value of the accounts'
    */
    "/total", 
    readTotalValueVariableController.handle
)

export {accountVariableRouter}