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

async function findLoanByIdController(req, res) {
    const { id } = req.params;
    try {
        const loan = await loanService.findLoanByIdService(id);
        res.send(loan);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

async function deleteLoanController(req, res) {
    const { id } = req.params;
    const userId = req.userId;
    try {
        const deletedLoan = await loanService.deleteLoanService(id, userId);
        res.status(200).send(deletedLoan);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

export default {
    createLoanController,
    findAllLoansController,
    findLoanByIdController,
    deleteLoanController
};