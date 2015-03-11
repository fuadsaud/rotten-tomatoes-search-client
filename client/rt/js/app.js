(function(movies) {
  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  App.Router.map(function() {
    this.route('search');
  });

  App.Movie = DS.Model.extend({
    title: DS.attr('string')
  });

  App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
      this.transitionTo('search');
    }
  });

  App.SearchRoute = Ember.Route.extend({
    actions: {
      search: function() {}
    },
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
          return movie.title.match(new RegExp(query, 'i'))
        });
      else
        return [];
    }.property('q', 'model')
  });
})(movies);
