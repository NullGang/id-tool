var base64 = require('base-64');

let IDDecode = function(bytes) {
    try {
    const decode = base64.decode(bytes);
    return decode;
} catch(e) {
    console.log(e);
}
}

module.exports = {
    IDDecode
}