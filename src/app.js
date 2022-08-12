const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./frameworks/web/routes');
const projectDependencies = require('./config/projectDependencies');
const ErrorHandler = require('./frameworks/common/ErrorHandler');

const app = express();
const port =  3000;

projectDependencies.DatabaseService.initDatabase().then(() => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes(projectDependencies));

    app.use(ErrorHandler);

    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
