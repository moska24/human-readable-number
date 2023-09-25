module.exports = function toReadable (number) {
    let numberToString = String(number);
    if (number == 0){
        return`zero`;
    } else if (number < 11){
        return numberToTen(number);
    } else if (number >= 11 && number <20){
       return numberFromElevenToNineteen(number);
    } else if (number >= 20 && number < 100){
        if (numberToString[1] == 0) {
            return`${numberDozens(Number(numberToString[0]))}`;
        }
        return`${numberDozens(Number(numberToString[0]))} ${numberToTen(Number(numberToString[1]))}`;
    } else if  (number >= 100 && numberToString[1] == 0  && numberToString[2] == 0){
        return `${numberToTen(Number(numberToString[0]))} hundred`;
    } else if (number >= 100 && numberToString[2] == 0){
        return`${numberToTen(Number(numberToString[0]))} hundred ${numberDozens(Number(numberToString[1]))}`;
    } else if (number >= 100 && numberToString[1] == 0){
        return`${numberToTen(Number(numberToString[0]))} hundred ${numberToTen(Number(numberToString[2]))}`;
    } else if (number >= 100 && numberToString[1] != 0 && numberToString[2] != 0){
        if (numberToString[1] == 1){
            return `${numberToTen(Number(numberToString[0]))} hundred ${numberFromElevenToNineteen(Number(numberToString.slice(1)))}`;
        }
        return `${numberToTen(Number(numberToString[0]))} hundred ${numberDozens(Number(numberToString[1]))} ${numberToTen(Number(numberToString[2]))}`;
    }
};


const numberToTen = (number) =>{
    switch (number){
        case 0: return '';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
    }
}

const numberFromElevenToNineteen = (number) =>{
    switch (number){
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
} 

const numberDozens = (number) =>{
    switch (number){
        case 1:return 'ten';
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}