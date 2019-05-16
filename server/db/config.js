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
      for (var i = 1; i < 101; i++) {
        db.queryAsync(`INSERT IGNORE INTO products (name) VALUES ('Product Number ${i}')`);
      }
    }).then(() => {
      const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

      const randomNumber =(min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }
      const optData = () => {
        let num = randomNumber(0,1);
        if (num === 1) {
          return 'Lorem ipsum dolor sit amet';
        } 
        if (num === 0) {
          return '';
        };
      }
      for (var i = 1; i < 101; i++) {
        let revNum = randomNumber(0, 10);
        for (var j = 0; j < revNum; j++) {
          //add a review for product i
          let stars = randomNumber(1, 5);
          let body = dummyText;
          let title = 'Lorem ipsum dolor';
          let recommended = randomNumber(0,1);
          let location = "Somewhere, USA";
          let gift = randomNumber(0,1);
          let email = 'apersonsemail@gmail.com';
          let pros = optData();
          let cons = optData();
          let describe_yourself = optData();
          let best_uses = optData();
          db.queryAsync(`
          INSERT IGNORE INTO reviews (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, product_ID)
          VALUES ('${stars}', '${body}', '${title}', '${recommended}', '${location}', '${gift}', '${email}', '${pros}', '${cons}', '${describe_yourself}', '${best_uses}', '${i}');
          `)
        }
      }
    }
    )
    .error(err => {
      console.log(err);
    });
};


