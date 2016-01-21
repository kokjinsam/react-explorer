import {Session} from 'meteor/session';

export default {
  getQuestion({Meteor, LocalState}) {
    Meteor.call('questions.get',(err, res) => {
      if (err) {
        return LocalState.set('QUIZ.GET_QUESTION_ERROR', err.message);
      }

      if (res) {
        LocalState.set('QUIZ.GET_QUESTION_ERROR', null);
        Session.set('question', res);
        return res;
      }
    });
  }
};
