const getTheTitles = function(books) {
    let titles = [];
    books.forEach(element => {
        if(element.hasOwnProperty("title")){
            titles.push(element.title);
        }
    });
    return titles;
}

module.exports = getTheTitles;
