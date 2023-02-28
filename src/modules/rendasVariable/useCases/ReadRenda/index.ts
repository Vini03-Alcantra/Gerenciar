import {ReadRendaVariableUseCase}  from "./ReadRentalVariableUseCase"
import {RendasVariableRepository} from "../../infra/typeorm/repositories/RendasRepository"

const rendasVariableRepository = new RendasVariableRepository()

const readRendaVariableUseCase = new ReadRendaVariableUseCase(
    rendasVariableRepository
)

export {readRendaVariableUseCase}