const router = require("express").Router()
const myController = require("../controllers")

router.get("/", myController.getIndex)
router.get("/tweet/list", myController.getTweetList)
router.get("/tweet/new", myController.getTweetNew)
router.post("/tweet/new/traitement", myController.postTweetNew)

module.exports = router

/**
 * =============================================================================
 * ROUTES
 * =============================================================================
 */