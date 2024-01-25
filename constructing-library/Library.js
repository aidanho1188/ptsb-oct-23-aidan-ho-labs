const {MongoClient, ObjectId} = require("mongodb");

class Library {
  constructor(dbUrl, dbName, collName) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.collName = collName;
    this.dbClient;
  }

  async client() {
    console.log(`Connecting to ${this.dbUrl}...`);

    this.dbClient = MongoClient.connect(this.dbUrl);

    console.log("Connected to database.");

    return this.dbClient;
  }

  async test() {
    const client = await this.client();
    client.close();
  }

  async collection() {
    const client = await this.client();
    const db = client.db(this.dbName);
    const collection = db.collection(this.collName);
    return collection;
  }

  async allBooks() {
    const collection = await this.collection();
    return collection.find({});
  }

  async findOneBook(id) {
    const docId = new ObjectId(id);
    const collection = await this.collection();
    return collection.find(docId);
  }

  async findManyBooks(query) {
    const collection = await this.collection();
    return collection.find(query);
  }

  async addBook(info) {
    try {
      const collection = await this.collection();
      collection.insertOne(info);
      console.log("Book added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async changeBook(id, info) {
    try {
      const mongoId = new ObjectId(id);
      const infoObj = {
        $set: info,
      };
      const collection = await this.collection();
      console.log(mongoId);
      await collection.updateOne({_id: mongoId}, infoObj);
      console.log("Book updated successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async removeBook(id) {
    try {
      const mongoId = new ObjectId(id);
      const collection = await this.collection();
      collection.deleteOne({_id: mongoId});
      log.info("Book deleted successfully");
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Library;
