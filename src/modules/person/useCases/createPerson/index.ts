import {CreatePersonUseCase} from "./CreatePersonUseCase"
import {PersonsRepository} from "../../infra/typeorm/repositories/PersonsRepository"

const personsRepository = new PersonsRepository()

const createPersonUseCase = new CreatePersonUseCase(
    personsRepository,
)
export {createPersonUseCase}