import { Router } from 'express';
import userControllers from '../controller/user.controlers.js';
import { validate, validateUserId } from '../middlewares/validation.middleware.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

router.post(
    '/users', 
    validate(userSchema), 
    userControllers.createUserController
);
router.post(
    '/users/login', 
    userControllers.loginUserController
);
router.get(
    '/users', 
    userControllers.findAllUsersController
);
router.get(
    '/users/:id', 
    validateUserId,
    userControllers.findUserByIdController
);
router.patch(
    '/users/:id',
    validateUserId,
    userControllers.updateUserController
);
router.delete(
    '/users/:id', 
    validateUserId,
    userControllers.deleteUserController
);

export default router;
