//  views
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Listing from '../models/listing';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

let HomeView = Backbone.View.extend({
	template: _.template($("#homeTemplate").text()),

	render: function () {
    // $('#product').html(this.template(this.model.attributes));
    console.log(this.model.get);
	}
});

export default HomeView;
