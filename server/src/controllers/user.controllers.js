const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const userController = {
  // Register new user
  async register(req, res) {
    try {
      const { email, name, password, role, adminCode } = req.body;

      // Check if user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // validate admin register
      let userRole = "user";
      if (role === "admin") {
        if (!adminCode || adminCode !== process.env.ADMIN_SECRET_CODE) {
          return res
            .status(403)
            .json({ message: "Invalid admin registration code" });
        }
        userRole = "admin";
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = new UserModel({
        email,
        name,
        password: hashedPassword,
        role: userRole,
      });

      await user.save();

      return res
        .status(201)
        .json({ message: "User registered successfully", role: userRole });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Login user
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({ token, name: user.name, role: user.role, email: user.email });
    } catch (error) {
      res.status(500).json({ message: error.message });
      
    }
  },

  // Get user profile
  async getProfile(req, res) {
    try {
      const user = await UserModel.findById(req.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update user profile
  async updateProfile(req, res) {
    try {
      const { name, email } = req.body;
      const user = await UserModel.findByIdAndUpdate(
        req.userId,
        { name, email },
        { new: true }
      ).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Admin: Get all users (Admin only)
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.find().select("-password");
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Admin: Delete user (Admin only)
  async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      // Prevent admin from deleting themselves
      if (userId === req.userId) {
        return res
          .status(400)
          .json({ message: "Cannot delete your own admin account" });
      }

      const deletedUser = await UserModel.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Admin: Update user role (Admin only)
  async updateUserRole(req, res) {
    try {
      const { userId } = req.params;
      const { role } = req.body;

      // Validate role
      if (!["user", "admin"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
      }

      // Prevent admin from changing their own role
      if (userId === req.userId) {
        return res
          .status(400)
          .json({ message: "Cannot change your own admin role" });
      }

      const user = await UserModel.findByIdAndUpdate(
        userId,
        { role },
        { new: true }
      ).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
