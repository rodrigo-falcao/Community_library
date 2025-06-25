const app = express();
import "dotenv/config";
import express  from 'express'
import userRouters from './src/routes/user.routes.js';
import bookRouters from './src/routes/book.routes.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouters)
app.use(bookRouters);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});