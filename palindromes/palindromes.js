const palindromes = function(a) {
    let str1 = a.split("");
    let str2 = a.split("").reverse();

    str1.filter(isAlphaOrParen);
    str2.filter(isAlphaOrParen);

    console.log(str1);
    console.log(str2);

    for(let i =0; i<str1.length;i++){
        if(str1[i] != str2[i]){
            return false;
        }
    }
    return true;
}

function isAlphaOrParen(str) {
    return /^[a-zA-Z()]+$/.test(str);
  }

module.exports = palindromes
