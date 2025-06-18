import userRepositories from "../repositories/user.repositories.js";

async function createUserService(newUser) {
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email);
    if (foundUser) {
        throw new Error("User already exists");
    }
    const user = await userRepositories.createUserRepository(newUser);
    return user;
}

export default {
    createUserService
};