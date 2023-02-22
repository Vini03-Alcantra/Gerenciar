import {container} from "tsyringe";

import "./providers"

import { IPersonRepository } from "../../modules/person/repositories/IPersonRepository";
import { PersonsRepository } from "../../modules/person/infra/typeorm/repositories/PersonsRepository";
import { AccountsConstantRepository } from "../../modules/AccountConstant/infra/typeorm/repositories/AccountsConstantRepository";
import { IAccountsConstantRepository } from "../../modules/AccountConstant/repositories/IAccountsConstantRepository";
import { IAccountsVariableRepository } from "../../modules/AccountVariable/repositories/IAccountsVariableRepository";
import { AccountsVariableRepository } from "../../modules/AccountVariable/infra/typeorm/repositories/AccountsVariableRepository";
import { IRendasVariableRepository } from "../../modules/rendasVariable/repositories/IRendasVariables";
import { RendasVariableRepository } from "../../modules/rendasVariable/infra/typeorm/repositories/RendasRepository";
import { IRendaConstantRepository } from "../../modules/rendasConstant/repositories/IRendaConstantRepository";
import { RendaConstantRepository } from "../../modules/rendasConstant/infra/typeorm/repositories/RendaConstantRepository";
import { IPersonsTokensRepository } from "../../modules/person/repositories/IPersonsTokensRepository";
import { PersonsTokensRepository } from "../../modules/person/infra/typeorm/repositories/PersonsTokensRepository";
import { IBalanceReposritory } from "../../modules/balance/repositories/IBalanceRepository"
import { BalanceRepository } from "../../modules/balance/infra/repositories/BalanceRepository"
import { IPersonDependentRepository } from "../../modules/PersonDependent/repositories/IPersonDependentRepository";
import { PersonDependentRepository } from "../../modules/PersonDependent/infra/typeorm/repository/PersonDependetRepository";

container.registerSingleton<IPersonRepository>(
    "PersonsRepository",
    PersonsRepository
)

container.registerSingleton<IAccountsConstantRepository>(
    "AccountsConstantRepository",
    AccountsConstantRepository
)

container.registerSingleton<IAccountsVariableRepository>(
    "AccountsVariableRepository",
    AccountsVariableRepository
)

container.registerSingleton<IRendasVariableRepository>(
    "RendaVariableRepository",
    RendasVariableRepository
)

container.registerSingleton<IRendaConstantRepository>(
    "RendaConstantRepository",
    RendaConstantRepository
)

container.registerSingleton<IPersonsTokensRepository>(
    "PersonsTokensRepository",
    PersonsTokensRepository
)

container.registerSingleton<IBalanceReposritory>(
    "BalanceRepository",
    BalanceRepository
)

container.registerSingleton<IPersonDependentRepository>(
    "PersonsDependentsRepository",
    PersonDependentRepository
)