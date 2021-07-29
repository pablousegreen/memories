import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import requests from './routes/requests.js';


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', requests);


/* CONNECT VIA MONGODB ATLAS const CONNECTION_URL = 'mongodb+srv://pablogonzalez:987654321@cluster/001DB?retryWrites=true&w=majority';
//const CONNECTION_URL = "mongodb://admin:password@localhost:27017/001DB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log('Important error here: ', error.message));
*/

/*  2ND OPTION OK VIA IMAGE   */
const CONNECTION_URL = 'mongodb://admin:password@mongodb/001DB?authSource=admin';
const options = {
    //user: "admin",
    //pass: "admin123",
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true
};
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log('Important error here: ', error.message));
mongoose.set('useFindAndModify', false);