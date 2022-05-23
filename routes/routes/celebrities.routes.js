const CelebrityModel = require("../../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const celebrity = require("../models/celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post ("/celebrities/add",  (req, res, next) => {
  const { name, occupation, catchPhrase, } = req.body;
  celebrity.create ({ name, occupation, catchPhrase })
  .then (( newCelebrity) => {
    res.redirect("/celebrities");
  })
  .catch((err) => { 
console.log (err);
res.render ("celebrities/new-celebrity")
  });
});
 
router.get ("/celebrities", (req, res, next) => {
  celebrity.find()
  .then(( allcelebrities) => {
    res.render ("celebrities/celebrities.hbs", { allcelebrities });
})
.catch ((err) => console.log (err));
});

module.exports = router;
