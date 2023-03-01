import { Router } from "express";
import { CreateAccountConstantController } from "../../../../modules/AccountConstant/useCases/CreateAccountConstant/CreateAccountConstantController";
import { ReadAccountConstantController } from "../../../../modules/AccountConstant/useCases/ReadAccountConstant/ReadAccountConstantController";
import { ReadTotalValueAccountConstantController } from "../../../../modules/AccountConstant/useCases/ReadTotalValueAccount/ReadTotalValueAccountConstantController";

const accountRouter = Router()

const createAccountConstant = new CreateAccountConstantController()
const readAccountConstantController = new ReadAccountConstantController()
const readTotalValueAccountConstantController = new ReadTotalValueAccountConstantController()

accountRouter.post("/", 
    /*
        #swagger.description = 'Route for account_constant. you can insert data of account constant in the system'
    */
    createAccountConstant.handle
)

accountRouter.get("/",
    /*
        #swagger.description = 'Route for account_constant. you can receive the list of all the accounts'
    */
    readAccountConstantController.handle
)

accountRouter.get("/total", 
    /*
        #swagger.description = 'Route for account_constant. you can see the total value of the accounts'
    */
    readTotalValueAccountConstantController.handle
)

export {accountRouter}