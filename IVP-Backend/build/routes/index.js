"use strict";
const express = require('express');
const router = express.Router();
const categoryRouter = require('./categories.route');
const questionRouter = require('./questions.route');
const employeeRouter = require('./employees.route');
const roleRouter = require('./roles.route');
const interviewRouter = require('./interview.route');
router.use('/admin', categoryRouter);
router.use('/admin', questionRouter);
router.use('/admin', employeeRouter);
router.use('/admin', roleRouter);
router.use('/admin', interviewRouter);
module.exports = router;
