import express from 'express'
import controller from '../controllers/enviarConsulta/consulta.js'
import validator from "../middlewares/validator.js";
import consultaSchemas from "../schemas/consulta.js";


let router = express.Router();
const { consulta } = controller;
<<<<<<< HEAD
router.post("/queries",validator(consultaSchemas), consulta);
=======
router.post("/queries", validator(consultaSchemas), consulta);
>>>>>>> 790ee2a7a4c9b0d76ba4e8254cbc3833efc2f147
export default router;