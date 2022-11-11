import express from 'express'; //framework for creating routing for the application
import bodyParser from 'body-parser'; //enblized to us for send post request
import mongoose from 'mongoose';// create modelss  for our posts
import cors from 'cors'; //enable cross-origin request 
import postRoutes from './routes/posts.js'

const app = express();

//creating middleware


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://memory:gihantha1215558@cluster0.drgk4.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas 