import { User } from "../model/User.js";
import Jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Please login"
            })
        }
        
        const decode = Jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode._id);
        req.user = user
        
        next()
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}