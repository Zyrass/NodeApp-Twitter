const mongoose = require("mongoose")
const { Schema, model } = mongoose

const tweetSchema = Schema({
  message: {
    type: String,
    required: [true, "Le champ message est obligatoire !"],
    minLength: [20, "20 caractères minimum..."],
    maxLength: [256, "256 caractères maximum..."]
  }
}, {
  timestamps: true
})

module.exports = model("messages", tweetSchema)

/**
 * =============================================================================
 * MODELS
 * =============================================================================
 */