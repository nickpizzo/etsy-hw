import Backbone from 'backbone';
import ActiveListings from '../models.js';
import ListingView from './listingView.js';

class ActiveListingsView extends Backbone.View {
  render() {
    const self = this;
    this.collection.each((listing) => {
      let listingView = new ListingView({ model: listing });
      self.$el.append(listingView.render());
    });
    return this.$el;
  }
  initialize() {
    this.activeListings = new ActiveListings();
    this.activeListings.fetch().then(() => {
			$('#product').html(activeListingsView.render());
		});
  }
}

export default ActiveListingsView;
