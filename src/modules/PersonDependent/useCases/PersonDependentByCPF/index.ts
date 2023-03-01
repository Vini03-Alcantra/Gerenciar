import {PersonDependentCPFUseCase}  from "./PersonDependentByCPFUseCase"
import {PersonDependentRepository} from "../createPersonDependent/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentCPFUseCase = new PersonDependentCPFUseCase(
    personDependentRepository
)

export {personDependentCPFUseCase}