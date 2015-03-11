(function(movies) {
  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  App.Movie = DS.Model.extend({
    title: DS.attr('string')
  });

  App.ApplicationStore = DS.Store.extend({
    adapter: 'DS.FixtureAdapter'
  });

  App.Movie.FIXTURES = movies;

  App.Router.map(function() {
    this.route('search');
  });

  App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
      this.transitionTo('search');
    }
  });

  App.SearchRoute = Ember.Route.extend({
    setupController: function(controller) {
      controller.set('model', movies);
    }
  });

  App.SearchController = Ember.ArrayController.extend({
    queryParams: ['q'],
    q: null,

    searchResults: function() {
      const query = this.get('q');
      const movies  = this.get('model');

      if (query)
        return movies.filter(function(movie) {
          return movie.title.match(new RegExp(query, 'i'));
        });
        else
          return [];
    }.property('q', 'model')
  });
})(movies);
