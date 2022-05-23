//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    firstName: String,
    lastName: String,
    occupation: String,
    catchPhrase: String,
    pictureUrl: String
  },
  {
    timestamps: true
  }
);

// const Celebrity = model("Celebrity", celebritySchema);
// module.exports = Celebrity;
module.exports = model("Celebrity", celebritySchema);