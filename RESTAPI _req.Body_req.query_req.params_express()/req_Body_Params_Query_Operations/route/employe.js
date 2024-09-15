const express = require("express")
const router = express.Router()

const {reqBody,reqParams,reqQuery}=require('../controller/employe')


router.route('/reqbody').get(reqBody);
router.route('/reqparams').get(reqParams);
router.route('/reqquery').get(reqQuery);