import {container} from "tsyringe";

import { IPersonRepository } from "../../modules/person/repositories/IPersonRepository";
import { PersonsRepository } from "../../modules/person/infra/typeorm/repositories/PersonsRepository";
import { AccountsConstantRepository } from "../../modules/AccountConstant/infra/typeorm/repositories/AccountsConstantRepository";
import { IAccountsConstantRepository } from "../../modules/AccountConstant/repositories/IAccountsConstantRepository";
import { IAccountsVariableRepository } from "modules/AccountVariable/repositories/IAccountsVariableRepository";
import { AccountsVariableRepository } from "modules/AccountVariable/infra/typeorm/repositories/AccountsVariableRepository";

container.registerSingleton<IPersonRepository>(
    "PersonsRepository",
    PersonsRepository
)

container.registerSingleton<IAccountsConstantRepository>(
    "AccountsConstantRepository",
    AccountsConstantRepository
)

container.registerSingleton<IAccountsVariableRepository>(
    "AccountsConstantRepository",
    AccountsVariableRepository
)