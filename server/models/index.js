var db = require('../db');

module.exports = {

  reviews: {
    get: function(id, callback) {
      console.log('in models get')
      db.queryAsync(`SELECT * FROM REVIEWS WHERE product_id = ${id}`)
      .then(results => callback(results[0]))
      .catch(err => console.error(err))
    },
    post: function(callback) {
      
    }
  }
};

