if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to final-fantasy-me.";
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
