const http = require('http');

class PayMethodService {
    getPayMethods() {
        return new Promise((resolve, reject) => {
            http.get('http://api.tripxpense.com/public/pay_method', (res) => {
                let rawData = '';
                res.on('data', (chunk) => {
                    rawData += chunk;
                });

                res.on('end', () => {
                    resolve(rawData);
                });
            }).on('error', (e) => {
                reject(`Got error: ${e.message}`);
            });
        });
    }
}

module.exports = PayMethodService;
