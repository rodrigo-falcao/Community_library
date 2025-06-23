import userServices from "../service/user.services.js";

async function createUserController(req, res) {
    const newUser = req.body;

    try {
        const user = await userServices.createUserService(newUser);
        res.status(201).send({user});
    } catch (err) {
        res.status(400).send(err.message);
    }
}

async function findAllUsersController(req, res) {
    try {
        const users = await userServices.findAllUsersService();
        res.send({users});
    } catch (err) {
        res.status(404).send(err.message);
    }
}

async function findUserByIdController(req, res) {
    const { id } = req.params;

    try {
        const user = await userServices.findUserByIdService(id);
        res.send({user});
    } catch (err) {
        return res.status(404).send(err.message);
    }
}

async function updateUserController(req, res) {
    const { id } = req.params;
    const newUser = req.body;

    try {
        const userUpdated = await userServices.updateUserService(newUser, id);
        res.send({userUpdated});
    } catch (err) {
        res.status(404).send(err.message);
    }
}

async function deleteUserController(req, res) {
    const { id } = req.params;

    try {
        const message = await userServices.deleteUserService(id);
        res.send({ message });
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export default {
    createUserController,
    findAllUsersController,
    findUserByIdController,
    updateUserController,
    deleteUserController
};