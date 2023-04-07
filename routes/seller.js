import express from "express";
import newSeller from "../controllers/seller/newSeller.js";

let router = express.Router()
const {create} = newSeller

router.post('/', create)

export default router