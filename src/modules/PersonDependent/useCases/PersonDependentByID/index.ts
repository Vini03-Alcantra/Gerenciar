import {PersonDependentIDUseCase}  from "./PersonDependentByIDUseCase"
import {PersonDependentRepository} from "../createPersonDependent/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentIDUseCase = new PersonDependentIDUseCase(
    personDependentRepository
)

export {personDependentIDUseCase}