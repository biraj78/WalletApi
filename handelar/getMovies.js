const mongoose = require("mongoose")

const getMovies = async (req, res) => {

  const MoviesModel = mongoose.model("contact");

  const movies = await MoviesModel.find({

  })

res.status(200).json({
   movies
})
}

module.exports = getMovies