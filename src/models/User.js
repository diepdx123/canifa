import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "member",
      enum: ["member", "admin"],
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
