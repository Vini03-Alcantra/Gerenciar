import {RefreshTokenUseCase} from "./RefreshTokenUseCase"
import {PersonsTokensRepository} from "../../infra/typeorm/repositories/PersonsTokensRepository"
import {DayjsDateProvider} from "../../../../shared/providers/DateProvider/implementations"

const personsTokensRepository = new PersonsTokensRepository()
const dayjsDateProvider = new DayjsDateProvider()

const refreshTokenUseCase = new RefreshTokenUseCase(
    personsTokensRepository,
    dayjsDateProvider
)
export {refreshTokenUseCase}