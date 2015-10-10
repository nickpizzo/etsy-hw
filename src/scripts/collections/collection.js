import Backbone from 'backbone';
import Listing from '../models/listing.js';

const API_KEY = 'qemaedhuj8rhq1k8hs2kdapx';

let ActiveListings = Backbone.Collection.extend({
  model: Listing,
  url: function() {
    return `https://openapi.etsy.com/v2/listings/active.js?api_key=${API_KEY}`;
  }
});

export default ActiveListings;
