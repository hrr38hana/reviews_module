const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create products table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER AUTO_INCREMENT NOT NULL,
      name VARCHAR(48) NOT NULL ,
      PRIMARY KEY (id)
    );`)
    .then(() => {
      // Create reviews table
      return db.queryAsync(`
      CREATE TABLE IF NOT EXISTS reviews(
        id INTEGER AUTO_INCREMENT,
        stars INTEGER(1) NOT NULL,
        title VARCHAR(60) NOT NULL,
        body VARCHAR(2000) NOT NULL,
        recommended INTEGER(1) NOT NULL,
        location VARCHAR(40) NOT NULL,
        gift INTEGER(1) NOT NULL,
        email VARCHAR(40) NOT NULL,
        pros VARCHAR(48) NULL,
        cons VARCHAR(48) NOT NULL,
        describe_yourself VARCHAR(48) NULL,
        best_uses VARCHAR(48) NULL,
        product_ID INTEGER NOT NULL,
        PRIMARY KEY(id)
        );`);
    })
    .then(() => {
      // create foreign keys
      return db.queryAsync(`
      ALTER TABLE reviews ADD FOREIGN KEY(product_ID) REFERENCES products(id);
        `);
    }).then(() => {
      for (var i = 0; i < 100; i++) {
        db.queryAsync(`INSERT IGNORE INTO products (name) VALUES ('Product Number ${i}')`);
      }
    })
    .error(err => {
      console.log(err);
    });
};


