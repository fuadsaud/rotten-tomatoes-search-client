(function() {
    window.App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });

    App.ApplicationAdapter = DS.RESTAdapter.extend({
        host: 'https://rotten-tomatoes-search-server.herokuapp.com'
    });

    App.Comment = DS.Model.extend({
        text: DS.attr('string'),
        author: DS.attr('string'),
        movie: DS.belongsTo('movie')
    });

    App.MovieSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
        attrs: {
            comments: { embedded: 'always' },
        }
    });

    App.Movie = DS.Model.extend({
        title: DS.attr('string'),
        year: DS.attr('number'),
        mpaa_rating: DS.attr('string'),
        runtime: DS.attr('number'),
        critics_score: DS.attr('number'),
        audience_score: DS.attr('number'),
        synopsis: DS.attr('string'),
        poster: DS.attr('string'),
        comments: DS.hasMany('comment')
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

    App.MovieController = Ember.ObjectController.extend({
        newCommentText: '',

        actions: {
            addComment: function() {
                const model = this.get('model');

                const comment = this.store.createRecord('comment', {
                    text: this.get('newCommentText'),
                    author: 'some user'
                });

                model.get('comments').pushObject(comment);

                model.save().then(function(returnItem) {
                    returnItem.get('comments').filterBy('id', null).invoke('deleteRecord');
                });

                this.set('newCommentText', '')
            }
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
