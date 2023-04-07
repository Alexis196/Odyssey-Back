import Seller from '../../models/Seller.js'

const newSeller = {
    create: async(req,res,next) => {
        const user_id = req.body.user_id;
        req.body.user_id = user_id;
        req.body.active = false;
        try{
            await Seller.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New seller created succesfully',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default newSeller;
