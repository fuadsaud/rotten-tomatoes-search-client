(function(movies) {
    window.App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });

    App.ApplicationAdapter = DS.FixtureAdapter;

    App.Movie = DS.Model.extend({
        title: DS.attr('string'),
        poster: DS.attr('string')
    });

    App.Movie.reopenClass({
        FIXTURES: movies.map(function(m) {
            return {
                id: m.id,
                title: m.title,
                poster: m.posters.thumbnail
            };
        })
    });

    App.Router.map(function() {
        this.route('search');
        this.resource('movie', { path: '/movies/:id' });
    });

    App.IndexRoute = Ember.Route.extend({
        beforeModel: function() {
            this.transitionTo('search');
        }
    });

    App.SearchRoute = Ember.Route.extend({
        model: function() {
            return this.store.find('movie');
        }
    });

    App.SearchController = Ember.ArrayController.extend({
        queryParams: ['q'],
        q: null,

        searchResults: function() {
            const query = this.get('q');

            if (query)
                return this.store.filter('movie', function(movie) {
                    return movie.get('title').match(new RegExp(query, 'i'));
                });
                else
                    return [];
        }.property('q', 'model')
    });
})(movies);
