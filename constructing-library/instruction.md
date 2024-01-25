# Lab: Constructing a Library #lab

## Due date: 1/22/24
## Objective

To practice Create, Read, Update, Delete functionality with MongoDB `mongosh` methods.

## Learning

In this lab, we will practice constructing a class with methods in order to use MongoDB functionality on a database and collection.

Topics:

- Classes and class construction
- MongoDB connection
- MongoDB `mongosh` methods

## Achieving

Your work will result in:

- A terminal application that, when run, performs various `mongosh` methods on a `books` collection in a `library` database.

## Procedure

## Creating And Scaffolding The Program

- [x]  Create a new directory `constructing-library` and initialize it with NPM.
- [x]  Install `mongodb` in the new directory.
- [x]  Create two files, `Library.js` and `client.js`.

## Construct The `Library` Class

- [x]  Import `MongoClient` and `ObjectId` from "mongodb" in `Library.js`
- [x]  Set up the `Library` class and constructor. The constructor will take the following parameters: `dbUrl`, `dbName`, and `collName`.
- [x]  Bind the parameters to the constructor with the `this` keyword.
- [x]  You will also bind the variable `dbClient` to `this` and initialize it as empty.

```javascript
class Library {

    constructor(dbUrl, dbName, collName) {

      this.dbUrl = dbUrl;

      this.dbName = dbName;

      this.collName = collName;

      this.dbClient;

    }

}
```

## Create The Async `client` Method

- [x]  Within the `Library` class, create a new async method `client`.
- [x]  Insert a console log to let the user know they are connecting to `dbUrl`.
- [x]  Pass in `this.dbUrl` to the `connect` method on `MongoClient` and reassign the value to `this.dbClient`.
- [x]  Insert a console log to inform the user their connection was successful.
- [x]  Return `this.dbClient`

```javascript
    async client() {

        console.log(`Connecting to ${this.dbUrl}...`)

        this.dbClient = MongoClient.connect(this.dbUrl)

        console.log("Connected to database.");

        return this.dbClient;

      }
```

## Create The Async `test` Method

- [x]  Beneath the async `client` method, create a new async method called `test`.
- [x]  Await `this.client()` and assign it to the client variable.
- [x]  Use the `close` method on client.

```javascript
async test() {

        const client = await this.client()

        client.close()

      }
```

## Set Up And Test Your Connection

- [x]  In `client.js`, import `Library`.
- [x]  Create a new variable `collection` and instantiate a new `Library`, passing in three arguments: the local connection string, "library", and "books".
- [x]  Invoke the `test` method on `collection`.
- [x]  If your connection is successful, you should see the console logs created in the `client` method in your `Library` constructor.

Connecting to mongodb://127.0.0.1:27017...

Connected to database.

## Create The Async `collection` Method

- [x]  Beneath the async `test` method, create a new async method called `collection`.
- [x]  Await `this.client()` and assign it to the client variable.
- [x]  Pass in `this.dbName` to the `db` method on `client` and assign it to a variable named `db`.
- [x]  Pass in `this.collName` to the `collection` method on `db` and assign it to a variable named `collection`.
- [x]  Return `collection`

```javascript
   async collection() {

        const client = await this.client();

        const db = client.db(this.dbName);

        const collection = db.collection(this.collName);

        return collection;

      }
```
## Populate the Collection

- [x]  In Compass, create at least three documents to represent the books in your `books` collection.
- [x]  These books should have the following key value pairs: `title`, `author`, and `copies`.

```javascript
{

  "title": "Eloquent Javascript",

  "author": "Marijn Haverbeke",

  "copies": 1

}
```

**You are now ready to begin working with the `mongosh` methods on your collection.**

## Create The Async `allBooks` Method

- [x]  Create the async `allBooks` method on `Library`.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Return the result of the `find` method on `collection`, passing in an empty object as its argument.
- [x]  In `client.js`, await and test the result of this method and assign it to the variable `allBooks`.
- [x]  On `allBooks`, utilize the `forEach` method to print each book to the console.
- [x]  _This method should display all documents in the `book` collection._

## Create The Async `findOneBook` Method

- [x]  Create the async `findOneBook` method on `Library` with the parameter of `id`.
- [x]  Pass in `id` to `ObjectId` and assign it to the variable `docId`.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Return the result of the find method on collection, passing in `docId` as the argument.
- [x]  In `client.js`, await the result of the method passing in the `_id` string from a document in the collection and assign it to the variable `findOneBook`.
- [x]  On `findOneBook`, utilize the `forEach` method to print the book to the console.
- [x] _This method should display one book whose `_id`matches the value passed in_.

## Create The Async `findManyBooks` Method

- [x]  Create the async `findBooks` method on `Library` with the parameter of `query`.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Return the result of `find` method on `collection`, passing in `query` as its argument.
- [x]  In `client.js`, await and test the result of the method, referring to the [MongoDB documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/) for the query syntax to pass as the argument. The key value pairs on the documents are valid querys. Assign the result to the `findManyBooks` variable.
- [x]  On `findManyBooks`, utilize the `forEach` method to print each book to the console.
- [x]  _This method should display all documents in the `books` collection that match the query._

## Create The Async `addBook` Method

- [x]  Create the async `addBook` method on `Library` with a parameter of `info`.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Pass in `info` to the `insertOne` method on `collection` and await the result.
- [x]  Console log a message to the user informing them their book was successfully added.
- [x]  Test the result of this method in `client.js`, referring to the [MongoDB documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/) for the format syntax to pass as the argument. The new book should have the same key value pairs as the original books.
- [x]  _This method should insert a new document 'book' into the `books` collection._

## Create The Async `changeBook` Method

- [x]  Create the async `changeBook` method on `Library` with two parameters, id and newInfo.
- [x]  Pass in id to `ObjectId` and assign it to the `mongoId` variable.
- [x]  Create a new object that utilizes the `$set` update operator as its key and newInfo as its value. Assign it to the `infoObj` variable. Refer to the [MongoDB documentation](https://www.mongodb.com/docs/manual/reference/operator/update/set/) if needed.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Await the result of the `updateOne` method on `collection`. The first argument will set the `_id` key to `mongoId` as its value within an object, the second argument will be `infoObj`.
- [x]  Console log a message to the user informing them their book was successfully updated.
- [x]  Await and test the result of this method in `client.js`. The first argument should be the id string of the document you want to change, and the second argument should be an object containing the key you want to change with its new value.
- [x]  _This method should update the targeted properties on the targeted document._

## Create The Async `removeBook` Method

- [x]  Create the async `removeBook` method on `Library` with the parameter id.
- [x]  Pass in id to `ObjectId` and assign it to the `mongoId` variable.
- [x]  Await `this.collection()` and assign it to a `collection` variable.
- [x]  Await the result of the `deleteOne` method on `collection`, passing in as argument an object containing `_id` as a key and `mongoId` as a value.
- [x]  Console log a message to the user informing them their book was successfully removed.
- [x]  Await and test the result of this method in `client.js`, passing in the id string of the document you want to remove.
- [x]  _This method should remove the targeted document from the collection and database._

## Going Further

- The `addBook` method accepts any info, regardless if it matches the shape of the other documents. How could you prevent this?
- The `updateBook` method will have various bugs dependent upon the user mistake. How can you prevent the following:
    - If the id is incorrect, Node will either throw an error or give a false acceptance message.
    - If there is no key given to update, Node will throw an error.
    - If the key does not exist on the given document, a new key value pair will be created on the document along with a false acceptance message.
- If multiple methods are invoked in the program, they each deliver a successful connection message. How can you print the successful connection message only once per program execution?