var base64 = require('base-64');
var utf8 = require('utf8');

function generate(n) {
    var add = 1, max = 12 - add;
    
    if ( n > max ) {
            return generate(max) + generate(n - max);
    }
    
    max        = Math.pow(10, n+add);
    var min    = max/10; 
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;
    
    return ("" + number).substring(add); 
}

function IDToolError(txt) {
    return txt;
}

let IDGen = function(text, number) {
try {
        if(number === 0) {
            let textt = text;
            var bytes = utf8.encode(textt);
            var encoded = base64.encode(bytes);
            var result = encoded;
            return result;
        } else {
        let textt = text;
        let numbers = number || 12;
        var bytes = utf8.encode(textt);
        var encoded = base64.encode(bytes + generate(numbers));
        var result = encoded;
        return result;
        }
} catch(e) {
    console.log(e);
}
}

module.exports = {
    IDGen
}