/*Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.*/

const HashMap = require('./HashMap');
const hash = new HashMap();
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = .5;

const deweyGroups = [
    'general works',
    'philosophy and psychology',
    'religion',
    'social sciences',
    'language',
    'natural sciences and mathematics',
    'technology',
    'the arts',
    'literature and rhetoric',
    'history, biography, and geography'
];

let deweyIndex = 000;
deweyGroups.map(group => {
    hash.set(deweyIndex, { key: group, value: new HashMap() });
    deweyIndex += 100;
});

const books = [
    { title: 'Tigey the Adventure Tiger' },
    { title: 'This Shoe Needs a Foot' },
    { title: 'B Book' },
    { title: 'Big Trucks Getting the Job Done' },
    { title: 'Pete the Kitty is at a Party' },
    { title: 'Clean Up Book' },
    { title: 'Mr. Brown Can Moo' }
];

books.map(book => {
    for (let i = 0; i < hash.length; i++) {
        hash.get(i * 100).value.set(book.title, book.title);
    };
});

function findBook (book, ddi){
    const title = hash.get(ddi).key;
    return `${title}: ${hash.get(ddi).value.get(book)}`
}

console.log(findBook('B Book', 100))

