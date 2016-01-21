import {Mongo} from 'meteor/mongo';

export default {
  Questions: new Mongo.Collection('questions'),
  Profiles: new Mongo.Collection('profiles')
};
