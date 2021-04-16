const mongoose = require("mongoose")
const { Schema, model } = mongoose

const tweetSchema = Schema({
  message: {
    type: String,
    required: [true, "Le champ message est obligatoire !"],
    minLength: [20, "20 caractères minimum..."],
    maxLength: [256, "256 caractères maximum..."]
  },
  author: {
    type: String,
    default: "Zyrass"
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

// tweetSchema.pre('validate', function(next) {
//   console.log("pré validate (Avant)")
//   next();
// })

// tweetSchema.post("validate", function(doc, next) {
//   console.log("post validate (Après)")
//   console.log(`${doc}`.bgGreen.white.bold) 
//   next();
// })

// tweetSchema.pre('save', function(next) {
//   console.log("pré save (Avant la sauvegarde)")
//   next();
// })

// tweetSchema.post("save", function(doc) {
//   console.log("post save (Après la sauvegarde)")
//   console.log(`${doc}`.bgWhite.black.bold)
// })

module.exports = model("messages", tweetSchema)

/**
 * =============================================================================
 * MODELS
 * =============================================================================
 */