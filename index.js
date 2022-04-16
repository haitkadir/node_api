import express  from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.get('/test', (req, res) => {
    res.send("\"flag\"83460uhbng3768438683\"flag\"");
});

app.get('/', (req, res) => {
    res.send("Home page");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));