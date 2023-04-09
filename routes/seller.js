import express from "express";
import newSeller from "../controllers/seller/newSeller.js";
import validator from "../middlewares/validator.js";
import passport from '../middlewares/passport.js';
import schemaSeller from '../schemas/seller.js'
import alreadyExists from "../middlewares/sellers/alreadyExists.js";


let router = express.Router()
const {create} = newSeller

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaSeller), alreadyExists, create)

export default router