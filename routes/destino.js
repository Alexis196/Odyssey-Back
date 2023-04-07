import express from "express";
import destinos from "../controllers/destinos/create.js";

let router = express.Router()
const {create} = destinos

router.post('/', create)

export default router