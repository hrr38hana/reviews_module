var db = require('../db');

module.exports = {

  reviews: {
    get: function(id, callback) {
      console.log('in models get')
      db.queryAsync(`SELECT * FROM REVIEWS WHERE product_id = ${id}`)
      .then(results => callback(results[0]))
      .catch(err => console.error(err))
    },
    post: function(review, callback) {
      db.queryAsync(`INSERT IGNORE INTO reviews (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, nickname, created, product_ID)
      VALUES ('${review.stars}', '${review.body}', '${review.title}', '1', '${review.location}', '0', '${review.email}', '${review.pros}', '${review.cons}', '${review.describe_yourself}', '${review.best_uses}', '${review.nickname}', '0', '${review.product_ID}')`)
      .then(results => callback(results))
      .catch(err=> console.error(err))
    }
  }
};

// INSERT IGNORE INTO REVIEWS (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, nickname, created, product_ID)
// VALUES ('3', 'this is a review', 'this is a title', '1', 'Denver, CO', '1', 'hj.bass@yahoo.com', 'none', 'none', 'no', 'none', 'Hayden', '0', '26');