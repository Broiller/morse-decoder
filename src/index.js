const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let simbol;

    for (let i = 0; i <  expr.length; i += 10) {
        simbol = [(expr.substr(i, 10))];
        arr.push(simbol);
    }


    let dashPoint = [];
    arr.forEach((element, index) => {
        dashPoint[index] = '';

        for (let i = 0; i < 10; i += 2) {
            simbol = (element[0].substr(i, 2));
            if (simbol === '10') {
                dashPoint[index] += '.';
            }
            else if (simbol === '11') {
                dashPoint[index] += '-';
            }
        }
    });


    let risult = dashPoint.map(function(element) {
        if (element !== '') {
            return MORSE_TABLE[element];
        }
        else {
            return ' ';
        }
    }).join('');
    


    return risult;

}

module.exports = {
    decode
}