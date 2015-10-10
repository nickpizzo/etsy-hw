import Backbone from 'backbone';

const API_KEY = 'qemaedhuj8rhq1k8hs2kdapx';

var Listing = Backbone.Model.extend({
	url: function() {
		return `https://openapi.etsy.com/v2/listings/${this.get('listing_id')}.js?api_key=${API_KEY}`;
	},
	defaults: {

	}
});
export default Listing;
