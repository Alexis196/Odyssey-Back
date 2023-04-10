import express from "express";
import destinos from "../controllers/destinos/create.js";
import oneDest from '../controllers/destinos/get_one.js'
import destroyD from "../controllers/destinos/destroy.js";
import updateD from '../controllers/destinos/update.js'
import todos from '../controllers/destinos/get_destino.js'
import finds_id from "../middlewares/auth/finds_id.js";
import exist_destino from '../middlewares/destinos/exist_destino.js'
import passport from '../middlewares/passport.js'
import is_property_of from "../middlewares/sellers/is_property_of.js";
import is_active from "../middlewares/sellers/is_active.js";

let router = express.Router()
const { create } = destinos
const { getOne } = oneDest
const { destroy } = destroyD
const { update } = updateD
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), exist_destino, finds_id, create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active, is_property_of, destroy)

export default router
