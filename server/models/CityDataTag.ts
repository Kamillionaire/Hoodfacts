let mongoose = require('mongoose');
let cityDataTag = new mongoose.Schema({
  name: {type:String,unique:true},
  type: String,
  subtype: String,
  data: Number,
  reference: String,
  owner: String
});

export const CityDataTag = mongoose.model('city_data_tags', cityDataTag);
