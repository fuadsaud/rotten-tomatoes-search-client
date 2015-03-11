(function(searchResults) {
  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  App.Router.map(function() {
    // this.route('search');
    // this.route('movies');
  });

  App.Movie = DS.Model.extend({
    title: DS.attr('string')
  });

  // App.IndexRoute = Ember.Route.extend({
  //   searchResults: function() {
  //     return searchResults;
  //   },
  //   renderTemplate: function() {
  //     console.log("SDJfnkjsdfJSDBFJHSDBFJhBSDJHFbJH");
  //     this.render('index');
  //   }
  // });
})(movies);
