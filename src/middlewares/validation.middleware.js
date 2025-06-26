import { userIdSchema } from "../schema/user.schema.js";
import { BookIdSchema } from "../schema/book.schema.js";
import { loanSchema } from "../schema/loan.schema.js";

const validate = (schema) => ( req, res, next) => {
    try {
        console.log("Middleware - Request body:", req.body);
        schema.parse(req.body);
        next();
    } catch (e) {
        console.error("Middleware - Validation error:", e.errors);
        res.status(400).json({ error: e.errors });
    }
}

const validateUserId = (req, res, next) => {
    try{
        const userId  = +req.params.id;
        userIdSchema.parse({ userId: userId });
        next();
    } catch (e) {
        res.status(400).json({ error: "Expected number, received nan" });
    }
}

const validateBookId = (req, res, next) => {
    try {
        BookIdSchema.parse({ bookId: +req.params.id });
        next();
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const validateLoanId = (req, res, next) => {
    try {
        const loanId = +req.params.id;
        if (isNaN(loanId) || loanId <= 0) {
            throw new Error("Invalid loan ID. It must be a positive number.");
        }
        next(); 
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

export { 
    validate,
    validateUserId,
    validateBookId,
    validateLoanId
};