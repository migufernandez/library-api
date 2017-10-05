# Library API

An API to manage books and their authors

## Getting started

This section is intended for software developers. If you have rights to the repo, simply clone the repo. If you do not have rights to the repo, you may fork the repo and clone your fork.

```
$ git clone <clone url>
$ cd library-api
$ npm install ramda and express
```

### Environment variables

You will need to create a local **.dnv** file to store your application secrets. Follow the steps to generate and store the secrets.

0. Create a `COUCH_URL` Environment variable: Using Cloudant for example or a local instance of couchDB, create an API key for the database. Store the key and password within your **.env** file. Use the key and password to create an Environment variable named `COUCH_URL` using this patern `COUCH_URL=https://key:password@<your base url>/`.

  **example**

  ```
  COUCH_URL=https://sdjfljdshflkjsd:9uwe9q87fds786s@jeffjohnson.cloudant.com/
  ```

0. Create a `PORT` Environment variables used by the client application to connect and communicate with your api.

  **example**

  ```
  PORT=4000
  ```
0. Create a `COUCH_DATABASE` Environment variable. The name of the database.

  **example**

  ```

  ```



### Starting the API

Run the following command to start the api and localhost: 4000

```
$ npm start
```
## Endpoints
CRUDLS
/books
/authors
## books

## create a book - `POST /books`

Add a book to the collection of books by providing a new book resource and the request body.

** Example **

```
POST /books

{
  "title": "A brave new world",
  "author": "author_aldous_huxley",
  "publisher": "Penguin Books",
  "ISDN": "1293478753",
  "genre": "Fiction",
  "description": "Brave New World is a novel written in 1931 by Aldous Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—"After Ford"—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a profound change in society. Huxley followed this book with a reassessment in an essay, Brave New World Revisited (1958), and with Island (1962), his final novel.",
  "Rating": "95",
  "prices": [
    {"type": "paperback", "price": 9.99},
    {"type": "hardback", "price": 19.99},
    {"type": "audio", "price": 19.99},
    {"type": "kindle", "price": 12.99}
  ]
}

```
response 200

```
{
  "ok": true,
  "id": "book_brave_new_world",
  "rev": "3-85f2d37145a65f30b72fc56e16a39661"
}
```


## Get a book - `GET /books/{id}`

retrieves a single book by the book `{id}` route parameter.

**Example**

```
GET /books/book_brave_new_world
```
**response 200**

```
{
  "_id": "book_brave_new_world",
  "_rev": "3-85f2d37145a65f30b72fc56e16a39661",
  "title": "A brave new world",
  "author": "author_aldous_huxley",
  "publisher": "Penguin Books",
  "ISDN": "1293478753",
  "pages": 574,
  "genre": "Fiction",
  "description": "Brave New World is a novel written in 1931 by A Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—'After Ford'—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a profound change in society. Huxley followed this book with a reassessment in an essay, Brave New World Revisited (1958), and with Island (1962), his final novel.",
  "Rating": "95",
  "prices": [
    {
      "type": "paperback",
      "price": 9.99
    },
    {
      "type": "hardback",
      "price": 19.99
    },
    {
      "type": "audio",
      "price": 19.99
    },
    {
      "type": "kindle",
      "price": 12.99
    }
  ]
}
```

### Route Parameters

 - `id` -  used to identify a book in a collection of books.

## Update a book - `PUT /books/{id}`

Updates a single book by the book `{id}` route parameter.




## List the books - `GET /books`

## TODO: Search the books = `GET /books?[author][genre][publisher]`

### Query Parameters

 - authors
 - publisher
 - genre

 Example: `GET /books?genre=historical fiction&author=will`



## /books
## /authors
