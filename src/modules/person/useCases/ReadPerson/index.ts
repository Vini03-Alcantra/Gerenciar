import {ReadPersonUseCase} from "./ReadPersonUseCase"
import {PersonsRepository} from "../../infra/typeorm/repositories/PersonsRepository"

const personsRepository = new PersonsRepository()

const readPersonUseCase = new ReadPersonUseCase(
    personsRepository,
)
export {readPersonUseCase}