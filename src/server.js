const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index');

//Settings -> Configuraciones
app.set('port',process.env.PORT || 4000);

//Middlewares
app.use((req,res,next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
})

app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({extended : false}));    

//Routes
routes(app);

//Start the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});