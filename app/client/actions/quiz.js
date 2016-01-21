import {Session} from 'meteor/session';

export default {
  getQuestion({Meteor, LocalState}) {
    Meteor.call('questions.get',(err, res) => {
      if (err) {
        LocalState.set('QUIZ.GET_QUESTION_ERROR', err.reason);
        return;
      }

      if (res) {
        LocalState.set('QUIZ.GET_QUESTION_ERROR', null);
        LocalState.set('QUIZ.READY_NEXT', false);
        LocalState.set('QUIZ.CORRECT_ANSWER', undefined);
        Session.set('question', res);
        return res;
      }
    });
  },

  validateAnswer({Meteor, LocalState}, questionId, userAnswer) {
    /* client side validation here */

    Meteor.call('questions.validate', questionId, userAnswer, (err, res) => {
      if (err ) {
        if (err.reason == 'Wrong answer') {
          LocalState.set('QUIZ.CORRECT_ANSWER', false);
        } else {
          LocalState.set('QUIZ.ERROR', err.reason);
        }

        return;
      }

      if (res) {
        LocalState.set('QUIZ.READY_NEXT', true);
        LocalState.set('QUIZ.CORRECT_ANSWER', true);
        return res;
      }
    });
  }
};
