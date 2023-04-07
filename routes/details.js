import express from "express";
import createDetail from "../controllers/detailDestino/create.js";
import destoyDetailest from '../controllers/detailDestino/destoy.js'
import updateDetail from '../controllers/detailDestino/update.js'
import getOne from "../controllers/detailDestino/get_one.js";

let router = express.Router()
const {create} = createDetail
const {destroy} = destoyDetailest
const {update} = updateDetail
const {get_one} = getOne

router.post('/', create)

router.get('/:id', get_one)

router.put('/:id', update)
router.delete('/:id', destroy)

export default router