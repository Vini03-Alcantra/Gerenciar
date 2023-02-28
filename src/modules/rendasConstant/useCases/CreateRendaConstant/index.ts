import {CreateRendaConstantUseCase}  from "./CreateRendaConstantUseCase"
import {RendaConstantRepository} from "../../infra/typeorm/repositories/RendaConstantRepository"

const rendaConstantRepository = new RendaConstantRepository()

const createRendaConstantUseCase = new CreateRendaConstantUseCase(
    rendaConstantRepository
)

export {createRendaConstantUseCase}