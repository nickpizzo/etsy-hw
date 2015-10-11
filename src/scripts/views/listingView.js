import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Listing from '../models.js';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

class ListingView extends Backbone.View {
	get template() {
    return _.template($("#listingTemplate").text());
  }

  render() { //this is as deep as our code currently goes
    console.log('are we getting here 2?'); //holy shit we actually got here!
    //this.$el.html(this.template(this.model.serialize()); //I dont understand this code
    console.log(this.model.serialize()); //why not a function????
    return this.$el;
  }
};

export default ListingView;
