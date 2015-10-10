import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Listing from '../models.js';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

export class ListingView extends Backbone.View {
	get template() {
    return _.template($("#homeTemplate").text());
  }

  render() {
    console.log('are we getting here 2?');
    this.$el.html(this.template(this.model.serialize()));
    return this.$el;
  }
};
