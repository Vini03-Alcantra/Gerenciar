import {TotalRendaConstantUseCase}  from "./TotalRendaConstantUseCase"
import {RendaConstantRepository} from "../../infra/typeorm/repositories/RendaConstantRepository"

const rendaConstantRepository = new RendaConstantRepository()

const totalRendaConstantUseCase = new TotalRendaConstantUseCase(
    rendaConstantRepository
)

export {totalRendaConstantUseCase}