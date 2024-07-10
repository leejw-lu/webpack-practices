const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),   // build할 위치 dev server는 memory에 저장.
        filename: 'assets/js/main.js'   //실제 js rending하는 위치
    }
}