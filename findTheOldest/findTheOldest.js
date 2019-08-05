let findTheOldest = function(people) {
    let age = 0;
    let highest = 0;
    let oldest = people[0];
    people.forEach(element => {
        if(element.hasOwnProperty("yearOfDeath")){
            age = element.yearOfDeath - element.yearOfBirth;
        }
        else{
            let d = new Date();
            age =  d.getFullYear() - element.yearOfBirth;
        }
        if(age > highest){
            highest = age;
            oldest = element;
        }
    });
    
    return oldest;
}

module.exports = findTheOldest
