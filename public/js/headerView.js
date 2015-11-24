var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  initialize: function () {
    var headerHTML = new HeaderView();
    this.$el.append(headerHTML.render().el);
  },

  template: _.template(tmpl.navigation),

  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
