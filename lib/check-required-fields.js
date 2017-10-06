const { difference, keys } = require('ramda')
const requiredKeys = ['title', 'type', 'author', 'ISDN', 'genre', 'description']

// Check to make sure require fields are present in the request body
// If any of the required keys are missig from the body then send back an array of missing fields
module.exports = (requiredKeys, body) => difference(requiredKeys, keys(body))
