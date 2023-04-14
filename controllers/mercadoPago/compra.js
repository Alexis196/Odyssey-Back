import mercadopago from "mercadopago";
import nodemailer from "nodemailer";

mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});
const controller = {
    compra: async (req, res) => {
        try {
            const products = req.body; // Obtén todos los productos del req.body
            console.log(products);

            const totalPrice = products.reduce((total, product) => {
                return total + product.price;
            }, 0);
            console.log("Total Price:", totalPrice);

            // Crea la preferencia de pago de MercadoPago
            const preference = {
                items: products.map((product) => ({
                    id: product.id,
                    title: product.title,
                    currency_id: "ARS",
                    unit_price: product.price,
                    quantity: product.quantity,
                })),
                payer: {
                    name: req.user.name,
                },
                back_urls: {
                    success: "http://localhost:3000/",
                    failure: "",
                    pending: "",
                },
                auto_return: "approved",
                binary_mode: true,
            };

            const response = await mercadopago.preferences.create(preference);
            const { init_point, id } = response.body;

            // Escucha el evento payment de la preferencia de MercadoPago
            mercadopago.payment.on("payment", async function (products) {
                try {
                    // Envía el correo electrónico con los detalles de la compra
                    const message = {
                        from: process.env.SMTP_USER,
                        to: req.user.mail,
                        subject: "Purchase Details",
                        html: `<p>Thank you for your purchase!</p>
                               <p>Here are the details of your order:</p>
                                 <ul>
                             ${products.map((product) => `<li>${product.title}: ${product.price}</li>`).join('')}
                                 </ul>
                            <p>Total price: ${totalPrice}</p>
                        <p>We appreciate your business and hope you enjoy your purchase!</p>`
                    };
                    await transporter.sendMail(message);
                } catch (error) {
                    console.log("Error sending email:", error);
                }
            });

            res.status(200).json({ init_point, id });
        } catch (error) {
            console.log("Error creating MercadoPago preference:", error);
            res.status(400).json({ error: error.message });
        }
    },
};



export default controller // exporta el controlador