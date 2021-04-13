const Tweet = require("../models/Tweet.model")
const Toastify = require('toastify-js')


const getIndex = (req, res) => {
  const pageName = "PROJET N°1"
  res.status(200).render("index", {
    pageName
  })
}

const getTweetList = (req, res) => {
  const pageName = "LISTE DES TWEETS"

  Tweet.countDocuments().then(counter => {

    Tweet.find({}).exec()
          .then(docs => {
            res.status(200).render("pages/tweet-list", {
              pageName,
              docs,
              counter
            })
          })
          .catch(err => {
            console.log(`
              \n\tUne erreur à été provoqué... : ${err}
            `)
          })

  }).catch(err => {
    console.log("Erreur de syntaxe")
  })

}

// Récupération de la page d'ajout d'un tweet
const getTweetNew = (req, res) => {
  const pageName = "UN TRUC À DIRE !?"
  res.status(200).render("pages/tweet-form", {
    pageName
  })
}

// ajout d'un nouveau tweet
const postTweetNew = (req, res) => {
  // console.log(req.body)
  const newTweet = new Tweet({
    message: req.body.tweetContent
  })

  newTweet.save()
          .then(doc => {
            // console.log(doc)
            res.redirect("/tweet/list")
          })
          .catch(err => {
            const errors = Object.keys(err.errors).map(key => err.errors[key].message)
            console.log(`
              \n\t${errors}
            `.bgRed.white.bold)
            res.status(400).render("pages/tweet-form", { errors })
          })
}

module.exports = {
  getIndex,
  getTweetList,
  getTweetNew,
  postTweetNew
}

/**
 * =============================================================================
 * CONTROLLERS
 * =============================================================================
 */