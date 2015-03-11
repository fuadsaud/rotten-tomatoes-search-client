(function() {
  Ember.TextField.reopen({
    delay: null,
    _debouncedSet: function(key, value, delay) {
      return Ember.run.debounce(this, Ember.set, this, key, value, delay);
    },
    _elementValueDidChange: function() {
      if (this.get('delay')) {
        return this._debouncedSet('value', this.$().val(), this.get('delay'));
      } else {
        return Ember.set(this, 'value', this.$().val());
      }
    }
  });

})();
