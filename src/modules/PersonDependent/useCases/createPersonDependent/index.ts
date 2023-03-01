import {CreatePersonDependentUseCase}  from "./CreatePersonDependentUseCase"
import {PersonDependentRepository} from "./PersonDependetRepository"

const personDependentRepository = new PersonDependentRepository()

const createPersonDependentUseCase = new CreatePersonDependentUseCase(
    personDependentRepository
)

export {createPersonDependentUseCase}