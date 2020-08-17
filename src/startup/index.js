const express = require('express');
const bodyParser = require('body-parser');

let _express = null;
let _config = null; 

class Server{
    constructor({config, router}){
        _config = config;
        _express = express().use(router);
    }

    start(){
        return new Promise(resolve => {

            // parse application/x-www-form-urlencoded
            _express.use(bodyParser.urlencoded({ extended: true }));
            // parse application/json
            _express.use(bodyParser.json());

            _express.listen(_config.PORT, () => {
                console.log(`${_config.APPLICATION_NAME} API running on port ${_config.PORT}`);
            });

            resolve();
        });
    }

}

module.exports = Server;
