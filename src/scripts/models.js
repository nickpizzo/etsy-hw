import Backbone from 'backbone';

const API_KEY = 'qemaedhuj8rhq1k8hs2kdapx';

export class Listing extends Backbone.Model{
	get url() {
		return `https://openapi.etsy.com/v2/listings/${this.get('listing_id')}.js?api_key=${API_KEY}`;
	}
};

export class ActiveListings extends Backbone.Collection{
  get url() {
    return `https://openapi.etsy.com/v2/listings/active.js?api_key=${API_KEY}`;
  }

	get model() {
		return Listing;
	}
};
