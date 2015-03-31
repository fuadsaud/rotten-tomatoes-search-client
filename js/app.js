(function (Ember, DS) {
  const App = Ember.Application.create({
    LOG_TRANSITIONS: true
  })

  App.Router.reopen({
    location: 'auto'
  })

  App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: '//rotten-tomatoes-search-server.herokuapp.com'
  })

  App.Router.map(function () {
    this.resource('movies')
    this.resource('movie', { path: 'movies/:movie_id' })
    this.route('notFound', { path: '*' })
  })

  App.Comment = DS.Model.extend({
    text: DS.attr('string'),
    author: DS.attr('string'),
    movie: DS.belongsTo('movie')
  })

  App.MovieSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
      comments: { embedded: 'always' }
    }
  })

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
  })

  App.IndexRoute = Ember.Route.extend({
    beforeModel: function () {
      this.transitionTo('movies')
    }
  })

  App.MoviesController = Ember.ArrayController.extend({
    queryParams: ['q'],
    q: '',
    searchTerm: '',

    watchSearch: function () {
      Ember.run.debounce(this, this.bouncedSet, 500)
    }.observes('q'),

    bouncedSet: function () {
      this.set('searchTerm', this.get('q'))
    },

    model: function () {
      return this.store.find('movie', { q: this.get('searchTerm') })
    }.property('searchTerm'),

    noResults: function () {
      return this.get('searchTerm') && this.get('model').length == 0
      // return this.get('searchTerm') && this.get('length') == 0
    }.property('searchTerm', 'model')
  })

  App.MovieRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('movie', params.movie_id)
    }
  })

  App.MovieController = Ember.ObjectController.extend({
    newCommentAuthor: '',
    newCommentText: '',

    comments: function () {
      return this.get('model').get('comments').toArray().reverse()
    }.property('model.comments.@each'),

    actions: {
      addComment: function () {
        const newCommentAuthor = this.get('newCommentAuthor').trim()
        const newCommentText = this.get('newCommentText').trim()

        if (!newCommentAuthor || !newCommentText) return

          const model = this.get('model')

          const comment = this.store.createRecord('comment', {
            author: newCommentAuthor,
            text: newCommentText
          })

          model.get('comments').pushObject(comment)

          model.save().then(function (returnItem) {
            returnItem.get('comments').filterBy('id', null).invoke('deleteRecord')
          })

          this.set('newCommentAuthor', '')
          this.set('newCommentText', '')
      }
    }
  })

  App.MovieView = Ember.View.extend({
    mpaa_rating_img: function () {
      return '/img/mpaa-' + this.get('controller.model').get('mpaa_rating').toLowerCase() + '.png'
    }.property('mpaa_rating')
  })

  Ember.TextArea.reopen({
    insertNewline: function (event) {
      if (!event.shiftKey) {
        this._super(event);
      }
    }
  })

  window.App = App
})(window.Ember, window.DS)
