const express = require('express');
const routes = express.Router();
const fileUpload = require('express-fileupload');
const path = require("path");

const FileController = require('./controllers/FileController');

routes.get('/files', FileController.index);
routes.post('/files', fileUpload({
  createParentPath: path.resolve(__dirname, "..", "uploads"),
  safeFileNames: true,
  preserveExtension: true
}), FileController.store);

module.exports = routes;