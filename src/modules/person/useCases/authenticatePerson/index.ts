import {AuthenticatePersonUseCase} from "./AuthenticatePersonUseCase"
import {PersonsRepository} from "../../infra/typeorm/repositories/PersonsRepository"
import {PersonsTokensRepository} from "../../infra/typeorm/repositories/PersonsTokensRepository"
import {DayjsDateProvider} from "../../../../shared/providers/DateProvider/implementations"

const personsRepository = new PersonsRepository()
const personsTokensRepository = new PersonsTokensRepository()
const dayjsDateProvider = new DayjsDateProvider()

const authenticatePersonUseCase = new AuthenticatePersonUseCase(
    personsRepository,
    dayjsDateProvider,
    personsTokensRepository
)
export {authenticatePersonUseCase}