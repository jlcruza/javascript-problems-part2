const fibonacci = function(value) {
    if(!isNaN(value) && value>0){
        let a = b = 1;
        if(value==1 || value == 2){
            return 1;
        }
        for(let i=3; i<=Number(value);i++){
            let c = a + b;
            a= b;
            b = c;
        }
        return b;

    }
    else{
        return "OOPS";
    }

}

module.exports = fibonacci
