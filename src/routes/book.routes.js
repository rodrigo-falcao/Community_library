import { authMiddleware } from '../middlewares/auth.middleware.js';
import { BookSchema } from "../schema/book.schema.js";
import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware.js';
import bookControllers from "../controller/book.controllers.js";

const router = Router();

router.get(
    '/books',
    bookControllers.findAllBooksController
);

router.use(authMiddleware);
router.post(
    '/books',
    validate(BookSchema),
    bookControllers.createBookController
);



export default router;