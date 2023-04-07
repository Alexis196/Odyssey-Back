import Destino from "../../models/Destino.js";

const destinos = {
    create: async (req, res, next) => {
        try {
            let destino = await Destino.create(req.body);
            return res.status(201).json({
                success: true,
                message: "A new destino has been created",
                destino,
            });
        } catch (err) {
            next(err);
        }
    },
};
export default destinos; // exporta el controlador
