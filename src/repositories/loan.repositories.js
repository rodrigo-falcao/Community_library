import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS loans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    bookId INTEGER,
    dueDate DATE,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (bookId) REFERENCES books(id)
    )
`);

function createLoanRepository(userID, bookId, dueDate) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO loans (userId, bookId, dueDate)
            VALUES (?, ?, ?)
            `,
            [userID, bookId, dueDate],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, userID, bookId });
                }
            }
        );
    });
}

function findAllLoansRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `
            SELECT * FROM loans
            `,
            [],
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findLoanByIdRepository(loanId) {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT * FROM loans WHERE id = ?
            `,
            [loanId],
            (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            }
        );
    });
}

function deleteLoanRepository(loanId) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            DELETE FROM loans WHERE id = ?
            `,
            [loanId],
            function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message: 'Loan deleted successfully', changes: this.changes });
                }
            }
        );
    });
}

export default {
    createLoanRepository,
    findAllLoansRepository,
    findLoanByIdRepository,
    deleteLoanRepository
}