import {container} from "tsyringe";

import { IPersonRepository } from "../../modules/person/repositories/IPersonRepository";
import { PersonsRepository } from "../../modules/person/infra/typeorm/repositories/PersonsRepository";

container.registerSingleton<IPersonRepository>(
    "PersonsRepository",
    PersonsRepository
)



