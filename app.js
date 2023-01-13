// const express = require('express');
import express from 'express'

// const db = require('./db');
import db from './db.js'

// var UserController = require('./user/UserController');
import UserController from './user/UserController.js'

const  app = express();

app.get("/test", function (req, res)  {
    res.status(200).send("Hello new world..!!")
})
app.use('/users', UserController);

// module.exports = app;
export default app