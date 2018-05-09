const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Answer } = require('../models/answers');
const { Question } = require('../models/questions');
const { Vote } = require('../models/votes');

//list of controllers here
const answers = require('../controllers/answers');
const questions = require('../controllers/questions');
const votes = require('../controllers/votes');

//combine models into one Object
const models = { Answer, Question, Vote };

const routersInit = config => {
    const router = express();

    //register api pointer
    router.use('/questions', models(Question, { config }));

    //catch api all errors
    router.use(errorHandler);

    return router;
}