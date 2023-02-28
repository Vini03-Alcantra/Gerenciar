import {PersonDependentIDUseCase}  from "./PersonDependentByIDUseCase"
import {PersonDependentRepository} from "../../infra/typeorm/repository/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentIDUseCase = new PersonDependentIDUseCase(
    personDependentRepository
)

export {personDependentIDUseCase}