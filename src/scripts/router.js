import $ from 'jquery';
import Backbone from 'backbone';

import { Listing, ActiveListings } from './models.js';

import ActiveListingsView from './views/activeListingsView.js';
import ListingDetailsView from './views/listingDetailsView.js';

class Router extends Backbone.Router {
	get routes() {
		return {
			'' : 'showActive',
			'details/:id' : 'showDetails'
		};
	}

	initialize() {
    Backbone.history.start();
		// "this" is the Router
	}

	showActive() {

    const activeListingsView = new ActiveListingsView({
			collection: this.activeListings
		});
	}

	showDetails(listingId) {

	}
};

export default Router;
