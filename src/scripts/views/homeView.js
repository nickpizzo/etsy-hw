//  views
import Backbone from "backbone";
import Listing from "../models/listing";
import _ from "underscore";

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

let HomeView = Backbone.View.extend({

	template: _.template($("#homeTemplate").text()),

	render: function () {
		this.$el.html(this.template(this.model.attributes)
		return this.$el;
	}

});

export default HomeView;
