const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
 
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email is required"],
    },
 
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("users", userSchema);
