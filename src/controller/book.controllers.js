import bookServices from "../service/book.services.js";

async function createBookController(req, res) {
    const newBook = req.body;
    const userId = req.userId;  

    try {
        const createdBook = await bookServices.createBookService(newBook, userId);
        res.status(201).send(createdBook);
    } catch (error) {
        res.status(400).send("Error creating book: " + error.message);
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await bookServices.findAllBooksService();
        res.status(200).send(books);
    } catch (error) {
        res.status(404).send(error.message);
    }   
}

async function findBookByIdController(req, res) {
    const bookId = req.params.id;
    try {
        const book = await bookServices.findBookByIdService(bookId);
        res.status(200).send(book);
    } catch (error) {
        res.status(404).send(error.message);
    }   
}

async function updateBookController(req, res) {
    const updatedBook = req.body;
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookServices.updateBookService(bookId, updatedBook, userId);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("Error updating book: " + error.message);
    }
}

async function deleteBookController(req, res) {
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookServices.deleteBookService(bookId, userId);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("Error deleting book: " + error.message);
    }
}

export default {
    createBookController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookController
}