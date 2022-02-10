const mongoose = require("mongoose");
let nominalSchema = mongoose.Schema({
  coinQTY: {
    type: Number,
    default: 0,
  },
  coinName: {
    type: String,
    required: [true, "Nama koin harus diisi"],
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Nominal", nominalSchema);
