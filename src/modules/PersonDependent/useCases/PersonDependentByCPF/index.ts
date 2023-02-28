import {PersonDependentCPFUseCase}  from "./PersonDependentByCPFUseCase"
import {PersonDependentRepository} from "../../infra/typeorm/repository/PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const personDependentCPFUseCase = new PersonDependentCPFUseCase(
    personDependentRepository
)

export {personDependentCPFUseCase}