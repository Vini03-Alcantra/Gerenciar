import {ReadRendaConstantUseCase}  from "./ReadRendaConstantUseCase"
import {RendaConstantRepository} from "../../infra/typeorm/repositories/RendaConstantRepository"

const rendaConstantRepository = new RendaConstantRepository()

const readRendaConstantUseCase = new ReadRendaConstantUseCase(
    rendaConstantRepository
)

export {readRendaConstantUseCase}