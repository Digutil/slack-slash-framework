import * as express from 'express';
import * as bodyParser from 'body-parser';

import { SlackBodyJSON } from './interfaces/slack'

import Commands from './commands';

/**
 * App
 *
 * Responsible for setting up the routes
 */
class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        let router = express.Router();
        router.post('/', (req, res, next) => {
            let body: SlackBodyJSON = req.body;
            res.json(Commands.process(body));
        });
        router.get('/', (req, res, next) => {
            let body: SlackBodyJSON = req.query;
            res.json(Commands.process(body));
        });
        this.express.use('/', router);
    }

}

export default new App().express;