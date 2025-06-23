import userRepositories from "../repositories/user.repositories.js";
import bcrypt from "bcrypt";

async function createUserService(newUser) {
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email);
    if (foundUser) throw new Error("User already exists");
    const passHash = await bcrypt.hash(newUser.password, 10);

    const user = await userRepositories.createUserRepository({
        ...newUser, 
        password: passHash
    });
    if (!user) throw new Error("Error creating user");
    return user;
}

async function findAllUsersService() {
    const users = await userRepositories.findAllUserRepository();
    return users;
}

async function findUserByIdService(id) {
    const user = await userRepositories.findUserByIdRepository(id);
    if (!user) throw new Error("User not found");
    return user;
}

export default {
    createUserService,
    findAllUsersService,
    findUserByIdService
};