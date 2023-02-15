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
    createPersonDependentController.handle
)

personDependents.get(
    "/cpf/:cpf",
    personDependentByCPFController.handle
)

personDependents.get(
    "/email/:email",
    personDependentByEmailController.handle
)

personDependents.get(
    "/id/:id",
    personDependentByIDController.handle
)


export {personDependents}