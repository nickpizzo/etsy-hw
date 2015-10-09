//  views
import Backbone from "backbone";
import Listing from "../models/listing";

let HomeView = Backbone.View.extend({

	model: Listing,

	render: function () {
		console.log(this.model.id);
	}

});
export default HomeView;
