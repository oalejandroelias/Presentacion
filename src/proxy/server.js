//const cors_proxy = require('cors-anywhere');

import cors_proxy from 'cors-anywhere';

const host = 'localhost';
const port = 4000;

cors_proxy.createServer({
    originWhitelist: [], // Permite todas las orígenes
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, function () {
    console.log('Ejecutando CORS Anywhere en ' + host + ':' + port);
});
