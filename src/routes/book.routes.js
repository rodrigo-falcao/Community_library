import { authMiddleware } from '../middlewares/auth.middleware.js';
import { BookSchema } from "../schema/book.schema.js";
import { Router } from 'express';
import { validate, validateBookId } from '../middlewares/validation.middleware.js';
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
router.get(
    '/books/search',
    bookControllers.searchBooksController
);
router.get(
    '/books/:id',
    validateBookId,
    bookControllers.findBookByIdController
);
router.patch(
    '/books/:id',
    validateBookId,
    bookControllers.updateBookController
);
router.delete(
    '/books/:id',
    validateBookId,
    bookControllers.deleteBookController
);


export default router;