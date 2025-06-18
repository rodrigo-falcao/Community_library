const app = express();
import express  from 'express'
import userRouters from './src/routes/user.routes.js';

app.use(express.json());
app.use(userRouters)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});