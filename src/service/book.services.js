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

async function findBookByIdService(bookId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    if (!book) {
        throw new Error("Book not found");
    }
    return book;
}

async function updateBookService(bookId, updatedBook, userId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    
    if (!book) {
        throw new Error("Error updating book");
    }
    if (book.userId !== userId) {
        throw new Error("You do not have permission to update this book");
    }
    const response = await bookRepositories.updateBookRepository(bookId, updatedBook);
    return response;
}

async function deleteBookService(bookId, userId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    if (!book) {
        throw new Error("Book not found");
    }
    if (book.userId !== userId) {
        throw new Error("You do not have permission to delete this book");
    }
    await bookRepositories.deleteBookRepository(bookId);
    return { message: "Book deleted successfully", id: bookId };
}

async function searchBooksService(search) {
    if(!search) { return await bookRepositories.findAllBooksRepository();}
    const books = await bookRepositories.searchBooksRepository(search);
    return books;
}

export default {
    createBookService,
    findAllBooksService,
    findBookByIdService,
    updateBookService,
    deleteBookService,
    searchBooksService
};