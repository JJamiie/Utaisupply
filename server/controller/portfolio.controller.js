"use strict";

let async = require("async");
let Portfolio = require("../models/portfolio");
let imageHelper = require("../helper/image.helper");
let handleResponse = require("../helper/handle.response");
/**
* Get portfolio 
*/

function get(req, res, next) {
  const portfolioId = req.params.portfolioId;
  Portfolio.findById(portfolioId)
    .populate("category")
    .exec(function(err, portfolio) {
      if (err) return handleResponse.error(err);
      res.send(handleResponse.success(portfolio));
    });
}

/**
 * Get portfolio list
 */
function list(req, res, next) {
  const { limit = 10, offset = 0, keyword = "", special = false } = req.query;
  let query = {
    translations: {
      $elemMatch: { title: { $regex: keyword, $options: "i" } }
    }
  };
  if (req.query.category !== undefined && req.query.category.length > 0) {
    query.category = req.query.category;
  }
  const skip = Number(limit) * Number(offset);
  async.parallel(
    [
      function(callback) {
        Portfolio.find(query)
          .populate("category")
          .sort({ updated: -1 })
          .limit(Number(limit))
          .skip(skip)
          .exec(function(err, portfolios) {
            if (err) {
              callback(err, null);
            } else {
              callback(null, portfolios);
            }
          });
      },
      function(callback) {
        Portfolio.find(query).count(function(err, count) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, count);
          }
        });
      }
    ],
    function(err, results) {
      res.json(handleResponse.successAndCount(results[0], results[1]));
    }
  );
}

/**
* Create new portfolio 
*/

function create(req, res, next) {
  const portfolio = new Portfolio({
    translations: JSON.parse(req.body.translations),
    category: req.body.category
  });
  portfolio.save().then(function(newPortfolio) {
    newPortfolio.save(function(err, updatedPortfolio) {
      if (err) {
        console.log(err);
        return handleResponse.error(err);
      }
      res.send(handleResponse.success(updatedPortfolio));
    });
  });
}

/**
* Update existing portfolio 
*/

function update(req, res, next) {
  const portfolioId = req.params.portfolioId;

  Portfolio.findById(portfolioId, function(err, portfolio) {
    if (err) return handleResponse.error(err);
    portfolio.translations = JSON.parse(req.body.translations);
    portfolio.category = req.body.category;
    portfolio.updated = new Date();
    portfolio.save(function(err, updatedPortfolio) {
      if (err) {
        console.log(err);
        return handleResponse.error(err);
      }
      res.send(handleResponse.success(updatedPortfolio));
    });
  });
}

/**
* Remove existing portfolio 
*/

function remove(req, res, next) {
  const portfolioId = req.params.portfolioId;
  Portfolio.findByIdAndRemove(portfolioId, (err, portfolioDeleted) => {
    for (let img of portfolioDeleted.image) {
      imageHelper.removeImage(img);
    }
    res.send(handleResponse.success(portfolioDeleted._id));
  });
}

function uploadImage(req, res, next) {
  if (!req.files) {
    return resr
      .status(400)
      .send(handleResponse.error("No files were uploaded."));
  }
  let portfolioId = req.params.portfolioId;
  Portfolio.findById(portfolioId, function(err, portfolio) {
    if (err) {
      return res
        .status(400)
        .send(handleResponse.error("Can't find " + portfolioId));
    }
    imageHelper.saveImage(req, res, "portfolio", function(path) {
      portfolio.image.push(path);
      portfolio.save(function(err, updatedPortfolio) {
        if (err) return handleResponse(err);
        res.send(handleResponse.success(updatedPortfolio));
      });
    });
  });
}

function removeImage(req, res, next) {
  let path = req.body.path;
  let portfolioId = req.params.portfolioId;
  Portfolio.findByIdAndUpdate(
    portfolioId,
    { $pull: { image: path } },
    { safe: true, upsert: true },
    function(err, portfolio) {
      if (err) {
        return res
          .status(400)
          .send(handleResponse.error("Can't find " + prouductId));
      }
      imageHelper.removeImage(path);
      res.send(handleResponse.success("Deleted"));
    }
  );
}

module.exports = {
  get,
  list,
  create,
  update,
  remove,
  uploadImage,
  removeImage
};
