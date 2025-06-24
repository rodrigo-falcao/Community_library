import userRepositories from "../repositories/user.repositories.js";
import { generateJWT } from "./auth.service.js";
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
    const token = generateJWT(user.id);
    return token;
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

async function updateUserService(newUser, userId) {
    const user = await userRepositories.findUserByIdRepository(userId);
    if (!user) throw new Error("User not found");

    if (newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10);   
    }

    const userUpdated = await userRepositories.updateUserRepository(userId, newUser);
    return userUpdated;
}

async function deleteUserService(userId) {
    const user = await userRepositories.findUserByIdRepository(userId);
    if (!user) throw new Error("User not found");
    const { message } = await userRepositories.deleteUserRepository(userId);
    return message;
}

export default {
    createUserService,
    findAllUsersService,
    findUserByIdService,
    updateUserService,
    deleteUserService
};