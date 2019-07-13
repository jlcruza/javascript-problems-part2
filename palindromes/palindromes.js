const palindromes = function(a) {
    let str1 = a.toLowerCase().split("");
    let str2 = a.toLowerCase().split("").reverse();

    str1 = cleanString(str1);
    str2 = cleanString(str2);

    for(let i =0; i<str1.length;i++){
        if(str1[i] != str2[i]){
            return false;
        }
    }
    return true;
}

function cleanString(msg){
    let res = "";
    for(let i = 0; i<msg.length;i++){
        if(isAlphaOrParen(msg[i])){
            res += msg[i];
        }
    }
    return res;
}

function isAlphaOrParen(str) {
    return /^[a-zA-Z()]+$/.test(str);
  }

module.exports = palindromes
