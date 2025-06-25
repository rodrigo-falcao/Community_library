import { userIdSchema } from "../schema/user.schema.js";
import { BookIdSchema } from "../schema/book.schema.js";

const validate = (schema) => ( req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (e) {
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

export { 
    validate,
    validateUserId,
    validateBookId
};