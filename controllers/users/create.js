import User from '../../models/User.js'

const user = {
    create: async (req, res) =>{
        try{
            req.body.photo = false,
            req.body.is_online = false,
            req.body.is_admin = false;
            req.body.is_seller = false;
            req.body.is_verified = false;
            req.body.verify_code = false;

            let user = await User.create(req.body)
            res.status(200).json({
                message: 'user created successfully',
                user: user
            })

        }
        catch(err){
            console.log(err)
            return (
                res.status(400).json({
                    message: 'Failed to create user',
                })
            )
        }
    }
}

export default user