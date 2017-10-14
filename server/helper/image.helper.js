const uuidv1 = require("uuid/v1");
const Jimp = require("jimp");
const handleResponse = require("./handle.response");
const path = require("path");
let config = require("../config");
const dataFolder = path.normalize(path.join(config.rootPath, "data"));
const fs = require('fs');

const TYPE_FILE = ".jpg";

function getFileName() {
  return uuidv1() + TYPE_FILE;
}

function saveImage(req, res, where, callback) {
  // Use the mv() method to place the file somsewhere on your server
  let path = "/images/" + where + "/" + getFileName();
  Jimp.read(req.files.image.data, function(err, image) {
    image
      .quality(60) // set quality
      .write('data' + path, function(cb) {
        if (err) {
          return res.status(500).send(handleResponse.error("Save files error"));
        }
        callback(path);
      });
  });
}


function removeImage(path) {
  console.log("Remove file: " + path);
  if(path.indexOf("nopic") === -1){
    fs.unlink(dataFolder + path);
  }
}


module.exports = { saveImage , removeImage};
