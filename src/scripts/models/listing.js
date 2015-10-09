import Backbone from "backbone";

const API_ROOT = "https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo";

var Listing = Backbone.Model.extend({

	url: API_ROOT

});
export default Listing;
