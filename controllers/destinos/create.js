import Destino from "../../models/Destino.js";
import Category from "../../models/Category.js";
import Seller from "../../models/Seller.js";

const destinos = {
    create: async (req, res, next) => {
        try {
            const { title, cover_photo, description, seller_id, category_id } = req.body;
            const category = await Category.findById(category_id); // encuentra la categoría por su id

            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found!",
                });
            }

            const destino = await Destino.create({
                title,
                cover_photo,
                description,
                seller_id,
                category_id,
            });

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

export default destinos;

