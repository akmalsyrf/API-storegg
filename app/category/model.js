const mongoose = require("mongoose");
let categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama kategory harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
