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



export default {
    createBookController,
    findAllBooksController
}