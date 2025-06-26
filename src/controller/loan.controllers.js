import loanService from "../service/loan.service.js";

async function createLoanController(req, res) {
    const { bookId, dueDate } = req.body;
    const userId = req.userId;

    try {
        const newLoan = await loanService.createLoanService(userId, bookId, dueDate);
        res.status(201).send(newLoan);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function findAllLoansController(req, res) {
    try {
        const loans = await loanService.findAllLoansService();
        res.send(loans);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

export default {
    createLoanController,
    findAllLoansController,
};