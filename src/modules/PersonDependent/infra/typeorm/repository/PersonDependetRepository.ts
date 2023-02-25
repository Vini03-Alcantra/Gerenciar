import { ICreatePersonDependentDTO } from "@modules/PersonDependent/dtos/ICreatePersonDependentDTO";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { getRepository, Repository } from "typeorm";
import {PersonDependent} from "../entities/PersonDependent"
import {logger} from "../../../../../logger"
class PersonDependentRepository implements IPersonDependentRepository {
    private repository: Repository<PersonDependent>
        
    constructor(){
        this.repository = getRepository(PersonDependent)
    }

    async create(data: ICreatePersonDependentDTO): Promise<PersonDependent> {
        const {namePerson ,emailPerson, birthday, cpf, dependentOnId} = data
        console.log(namePerson)
        console.log(this.repository)
        try {
            const personDependent = this.repository.create({
                namePerson, 
                emailPerson, 
                birthday, 
                cpf, 
                dependentOnPerson: dependentOnId
            })
            console.log(personDependent)
            await this.repository.save(personDependent)

            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByEmail(email: string): Promise<PersonDependent> {
        try {
            const personDependent = await this.repository.findOne({
                emailPerson: email
            })

            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByCPF(cpf: string): Promise<PersonDependent> {
        try {
            const personDependent = await this.repository.findOne({
                cpf: cpf
            })
            
            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }
    async findById(id: string): Promise<PersonDependent> {
        try {
            const personDependent = await this.repository.findOne({
                id
            })
            
            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }
    async find(): Promise<PersonDependent[]> {
        try {
            const personDependentList = await this.repository.find()
            return personDependentList
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

}

export {PersonDependentRepository}