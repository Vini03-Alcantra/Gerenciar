import {CreatePersonDependentUseCase}  from "./CreatePersonDependentUseCase"
import {PersonDependentRepository} from "../../infra/typeorm/repository/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const createPersonDependentUseCase = new CreatePersonDependentUseCase(
    personDependentRepository
)

export {createPersonDependentUseCase}