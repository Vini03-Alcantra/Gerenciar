import {TotalRendaVariableUseCase}  from "./TotalRendaVariableUseCase"
import {RendasVariableRepository} from "../../infra/typeorm/repositories/RendasRepository"

const rendasVariableRepository = new RendasVariableRepository()

const totalRendaVariableUseCase = new TotalRendaVariableUseCase(
    rendasVariableRepository
)

export {totalRendaVariableUseCase}