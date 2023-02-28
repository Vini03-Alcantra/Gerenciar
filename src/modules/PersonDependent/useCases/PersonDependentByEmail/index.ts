import {PersonDependentEmailUseCase}  from "./PersonDependentByEmailUseCase"
import {PersonDependentRepository} from "../../infra/typeorm/repository/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentEmailUseCase = new PersonDependentEmailUseCase(
    personDependentRepository
)

export {personDependentEmailUseCase}