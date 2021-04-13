const mongoose = require("mongoose").connect(
  "mongodb+srv://zyrass:demo@dyma.tdlk0.mongodb.net/coursTwitter?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log(`
    \n\tConnexion à la base de donnée OK !!
  `.bgGreen.white.bold)
})
.catch(err => {
  console.log(`
    \n\tLa connexion à la DB n'a pas fonctionné...
    Erreur : ${err}
  `.bgRed.white.bold)
})
