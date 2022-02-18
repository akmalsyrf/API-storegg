const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, required: [true, "nama game harus diisi"] },
      category: { type: String, required: [true, "kategori harus diisi"] },
      thumbnail: { type: String },
      coinName: { type: String, required: [true, "nama coin harus diisi"] },
      coinQTY: { type: String, required: [true, "jumlah coin harus diisi"] },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, required: [true, "nama harus diisi"] },
      type: { type: String, required: [true, "tipe pembayaran harus diisi"] },
      bankName: { type: String, required: [true, "nama bank harus diisi"] },
      noRekening: { type: String, required: [true, "nomor rekening harus diisi"] },
    },
    name: {
      type: String,
      required: [true, "nama harus diisi"],
      maxLength: [225, "nama maksimal 225 karakter"],
    },
    accountUser: {
      type: String,
      required: [true, "nama akun harus diisi"],
      maxLength: [225, "nama maksimal 225 karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, required: [true, "nama player harus diisi"] },
      phoneNumber: {
        type: Number,
        required: [true, "nomor telepon harus diisi"],
        maxLength: [15, "nomor telepon harus antara 9-15 karakter"],
        maxLength: [9, "nomor telepon harus antara 9-15 karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
