const getTheTitles = function(books) {
    if (typeof(books) !== 'object')
        return 'ERROR';
    let titles = [];
    for (let i = 0; i < books.length; i++) 
        titles[i] = books[i].title;
    return titles;
};

module.exports = getTheTitles;
