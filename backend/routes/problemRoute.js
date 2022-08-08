const express = require('express');
const router = express.Router();
var multer = require('multer');
const checkLogIn = require('../middleware/checkLogIn');
const isAdminCheck = require('../middleware/isAdminCheck');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });
  
  
  // The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
  // You can create multiple middleware each with a different storage engine config so save different files in different locations on server
  const upload = multer({ storage: fileStorageEngine });


const {createProblem, retrieveAllProblems, getProblem} = require('../controllers/problemController');


router.route('/createProblem').post(upload.fields([
    {name: "prb_inputTestCase", maxCount: 1},
    {name: "prb_outputTestCase", maxCount: 1}
]), createProblem);
router.route('').get(retrieveAllProblems);
router.route('/getProblem/:id').get(getProblem);

module.exports = router;