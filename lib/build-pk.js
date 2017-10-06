// build and _id prop that takes the title of the book and does the following:
// such as "title": "A Brave new world"
// transform it into "book_brave_new_world"
// require ramda
// lower case
// strip off the A or the if its the first word
// concatenate the word "book"
// replace the spaces with underscores _

// prefix = "book_"
// value = "A Brave New World"
// return value => "book_brave_new_world"

// this is a pure funtion because 2 things come in a 1 thing comes out. no matter what.

const {
  compose,
  toLower,
  split,
  join,
  concat,
  contains,
  head,
  drop
} = require('ramda')
const removeArticles = arrData =>
  contains(head(arrData), ['the', 'a']) ? drop(1, arrData) : arrData

module.exports = (prefix, joiner, value) =>
  compose(
    concat(prefix + joiner),
    join(joiner),
    removeArticles,
    split(' '),
    toLower()
  )(value)
