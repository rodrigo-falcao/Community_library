import bookRepositories from "../repositories/book.repositories.js";

async function createBookService(newBook, userId) {
    const createBook = await bookRepositories.createBookRepository(newBook, userId);
    if(!createBook) {
        throw new Error("Error creating book");
    }
    return createBook;
}

async function findAllBooksService() {
    const books = await bookRepositories.findAllBooksRepository();
    return books;
}

export default {
    createBookService,
    findAllBooksService,
};