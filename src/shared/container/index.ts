import {container} from "tsyringe";

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
    "RendaVariableUseCase",
    RendasVariableRepository
)

container.registerSingleton<IRendaConstantRepository>(
    "RendaConstantRepository",
    RendaConstantRepository
)