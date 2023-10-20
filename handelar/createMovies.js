const mongoose = require("mongoose");

const createMovies = async (req, res) => {
  const MoviesModel = mongoose.model("contact");

  const {name, number, email, location, message, date} = req.body;

  // validation 

  try{
    const numberStr = number.toString();
    if(numberStr.length !== 10) throw "Please provide valid number"

  } catch(e) {
    res.status(400).json({
        status: "failed",
        message: e
    })
    return;
  }


  let createdMovie;
try{
 const createdMovie = await MoviesModel.create({
    name,
    number,
    email,
    location,
    message,
    date
  });
} catch(e) {

    res.status(400).json({
        status: "failed",
        message: e.message
    })
    return;
}
console.log(req.body)
  res.status(200).json({
    message: "Message SucessFully Sent",
    createdMovie: createdMovie,
  });
};

module.exports = createMovies;
