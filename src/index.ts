import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('ts-express:server');

/**
 * Sets server port
 *
 * @type {number}
 */
const port = 3000;
App.set('port', port);

/**
 * Create server
 *
 * @type {"http".Server}
 */
const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Error event listener
 *
 * @param error
 */
function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch(error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Listening event listener
 */
function onListening(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}