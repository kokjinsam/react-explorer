import { Meteor } from 'meteor/meteor';
import addInitialQuestions from './configs/initial_add.js';

Meteor.startup(() => {
  addInitialQuestions();
});
