import { Router } from 'express';
import userControllers from '../controller/user.controlers.js';
import { validate } from '../middlewares/validation.middleware.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

router.post(
    '/users', 
    validate(userSchema), 
    userControllers.createUserController
);
router.get(
    '/users', 
    userControllers.findAllUsersController
);

export default router;
