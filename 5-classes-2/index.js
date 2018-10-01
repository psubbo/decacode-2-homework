const User = require("./user.class.js")
const Admin = require("./admin.class.js");

const user1 = new User("Pavel","Subbotin");
const admin1 = new Admin("Ninja", "Admin");
user1.login();
admin1.login();
console.log(user1);
console.log(admin1);
