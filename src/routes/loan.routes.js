import { loanSchema } from '../schema/loan.schema.js';
import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware.js';
import loanControllers from '../controller/loan.controllers.js';


const router = Router();

router.post(
    '/loans',
    validate(loanSchema),
    loanControllers.createLoanController
);
router.get(
    '/loans',
    loanControllers.findAllLoansController
);


export default router;
