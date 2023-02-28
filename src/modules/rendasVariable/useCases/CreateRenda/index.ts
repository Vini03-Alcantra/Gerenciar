import {CreateRendaVariableUseCase}  from "./CreateRendaVariableUseCase"
import {RendasVariableRepository} from "../../infra/typeorm/repositories/RendasRepository"

const rendasVariableRepository = new RendasVariableRepository()

const createRendaVariableUseCase = new CreateRendaVariableUseCase(
    rendasVariableRepository
)

export {createRendaVariableUseCase}