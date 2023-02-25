import { Person } from "../../../../modules/person/infra/typeorm/entities/Person";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadPersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonRepository
    ){}

    async execute(): Promise<Person[]>{
        const persons = await this.personsRepository.find();

        return persons;
    }
}

export {ReadPersonUseCase}