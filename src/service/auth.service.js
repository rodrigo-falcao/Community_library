import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

function generateJWT(id) {
    return jwt.sign(
        {id}, 
        process.env.SECRET_JWT, 
        {expiresIn: 86400});
}

async function loginService(email, password) {
    const user = await userRepositories.findUserByEmailRepository(email);
    if(!user) {
        throw new Error("Invalid User or Password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        throw new Error("Invalid User or Password");
    }
    return generateJWT(user.id);
}

export { generateJWT, loginService };