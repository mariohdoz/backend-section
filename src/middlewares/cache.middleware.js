const cache = require('memory-cache');
const CACHE_KEY = require('../config/index.config');

let fcache = (req, res, next) => {

    const key = CACHE_KEY + req.originUrl || req.url;
    const cacheBody = cache.get(key);
    
    if (cacheBody) {
        return res.send(JSON.parse(cacheBody));
    } else {
        res.sendResponse = res.send; 
        res.send = body => {
            cache.put(key, body, 360 * 1000);
            res.sendResponse(body);
        }
    }

    next(); 
}

module.exports = {
    fcache
}
