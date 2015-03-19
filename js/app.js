(function() {
    window.App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });

    App.ApplicationAdapter = DS.RESTAdapter.extend({
        host: 'http://localhost:7000'
    });

    App.Movie = DS.Model.extend({
        title: DS.attr('string'),
        year: DS.attr('number'),
        mpaa_rating: DS.attr('string'),
        runtime: DS.attr('number'),
        synopsis: DS.attr('string'),
        poster: DS.attr('string')
    });

    App.Router.map(function() {
        this.resource('movies');
        this.resource('movie', { path: 'movies/:movie_id' });
    });

    App.IndexRoute = Ember.Route.extend({
        beforeModel: function() {
            this.transitionTo('movies');
        }
    });

    App.MoviesController = Ember.ArrayController.extend({
        queryParams: ['q'],
        q: null,

        movies: function() {
            return this.store.find('movie', { q: this.get('q') });
        }.property('q', 'model')
    });

    App.MovieRoute = Ember.Route.extend({
        model: function(params) {
            return this.store.find('movie', params.movie_id)
        }
    });

    App.MovieView = Ember.View.extend({
        templateName: 'movie',

        mpaa_rating_img: (function() {
            return "img/mpaa-"
                 + this.get('controller.model')
                       .get('mpaa_rating')
                       .toLowerCase() + '.png';
        }).property('mpaa_rating')
    });
})();
