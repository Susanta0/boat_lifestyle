const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");

const protect = async (req, res, next) => {
    try {
        const token = req.headers("Autherization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};


const isAdmin = async (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. Admin only.' });
    }
  };


module.exports = {protect, isAdmin}