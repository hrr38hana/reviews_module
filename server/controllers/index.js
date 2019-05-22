var models = require('../models');

module.exports = {
  reviews: {
    get: (req, res) => {
      models.reviews.get((err, results) => {
        if(err) {console.error(err)}
        res.json(results);
      })
    }
  }

}