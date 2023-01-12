import AppDataSource from "../../data-source"
import { Users } from "../../entities/users.entitiy"

const listUsersService = async () => {
    const dataRepository = AppDataSource.getRepository(Users)
    const users = await dataRepository.find()
    return users
}


export default listUsersService