import {PersonDependentEmailUseCase}  from "./PersonDependentByEmailUseCase"
import {PersonDependentRepository} from "../createPersonDependent/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentEmailUseCase = new PersonDependentEmailUseCase(
    personDependentRepository
)

export {personDependentEmailUseCase}