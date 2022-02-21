const { model, Schema } = require("mongoose");

const tripSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
      type: String,
      required: true,
  }
  image: {
      type: String,
      required: true
  }
  },
);
module.exports = model("Trip", userSchema);
