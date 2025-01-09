// CODE FROM CHATGPT STEP 3 ADD A MONGO DB MODEL

const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  confirmationToken: { type: String },
  confirmed: { type: Boolean, default: false},
  tokenExpiry: { type: Date, default: Date.now},
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Subscriber", subscriberSchema);

// AFTER THIS GO TO INDEX.JS AND SET UP CRUD ACCORDINGLY
