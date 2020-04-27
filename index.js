import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// connection à mongoose
mongoose.Promise = global.Promise;
// mongoose.set('useUnifiedTopology', true); <--- comprendre ce truc
   mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// gestion des routes 

routes(app);


app.get('/', (req, res) => 
    res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Serveur est sur le port ${PORT}`)
);

