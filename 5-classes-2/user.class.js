module.exports = function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.hasAccess = false;
    this.isLoggedIn = false;
    this.login = function() {
        if (this.hasAccess){
            this.isLoggedIn = true;
        };
      };
      this.logout = function(){
        this.isLoggedIn = false;
      };
}