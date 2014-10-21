// grab the mongoose module
var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String
})

personSchema.methods.sayHi = function () {
  var greeting = this.name
    ? "Hi, I'm " + this.name
    : "I don't have a name. Sad :("
  console.log(greeting);
}

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Person', personSchema);