const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      maxLength: [225, "Nama maksimal 225 karakter"],
    },
    username: {
      type: String,
      required: [true, "Username harus diisi"],
      maxLength: [225, "Username maksimal 225 karakter"],
    },
    password: {
      type: String,
      required: [true, "Kata sandi harus diisi"],
      maxLength: [225, "Kata sandi maksimal 225 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    filename: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "No telepon harus diisi"],
      maxLength: [13, "No telepon harus antara 9-13 karakter"],
      minLength: [9, "No telepon harus antara 9-13 karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

playerSchema.path("email").validate(
  async (value) => {
    try {
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `Email ${attr} sudah terdaftar`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);
