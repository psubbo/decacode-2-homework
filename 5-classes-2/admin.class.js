const User = require("./user.class.js")
module.exports = function Admin(){
    User.apply(this, arguments)
    this.hasAccess = true;
};