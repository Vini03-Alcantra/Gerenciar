import { Router } from "express";

import {PersonDependentByCPFController} from "../../../../modules/PersonDependent/useCases/PersonDependentByCPF/PersonDependentByCPFController"
import {PersonDependentByEmailController} from "../../../../modules/PersonDependent/useCases/PersonDependentByEmail/PersonDependentByEmailController"
import {PersonDependentByIDController} from "../../../../modules/PersonDependent/useCases/PersonDependentByID/PersonDependentByIDController"
import {CreatePersonDependentController} from "../../../../modules/PersonDependent/useCases/createPersonDependent/CreatePersonDependentController"

const personDependents = Router()

const personDependentByCPFController = new  PersonDependentByCPFController()
const personDependentByEmailController = new  PersonDependentByEmailController()
const personDependentByIDController = new  PersonDependentByIDController()
const createPersonDependentController = new  CreatePersonDependentController()

personDependents.post(
    "/",
    /*
        #swagger.description = 'Route for person_dependent. you can insert the data of your person_dependent'
    */
    createPersonDependentController.handle
)

personDependents.get(
    "/cpf/:cpf",
    /*
        #swagger.description = 'Route for person_dependent. you can get through cpf your person_dependent'
    */
    personDependentByCPFController.handle
)

personDependents.get(
    "/email/:email",
    /*
        #swagger.description = 'Route for person_dependent. you can get through email your person_dependent'
    */
    personDependentByEmailController.handle
)

personDependents.get(
    "/id/:id",
    /*
        #swagger.description = 'Route for person_dependent. you can get through id your person_dependent'
    */
    personDependentByIDController.handle
)


export {personDependents}