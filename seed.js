const User = require('./Models/userModel');
const Book = require('./Models/bookModel');

const user1 = new User({
    name: 'Arnold Void',
    age: 22,
    email: 'test1@test.de',
    books: []
});

const user2 = new User({
    name: 'Max Mustermann',
    age: 33,
    email: 'test2@test.de',
    books: []
});

user1.save();
user2.save();

const book1 = new Book({
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851
  });

book1.save();