import {Questions, Profiles} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const hasAnswered = (userId, questionId) => {
  return Profiles.findOne({
    userId,
    questionId
  });
};

Meteor.methods({
  'questions.validate'(questionId, userAnswer) {
    check(questionId, String);
    check(userAnswer, String);

    if (Meteor.userId()) {
      throw new Meteor.Error(400, 'Please login');
    }

    let userId = this.userId();

    // check if user has already answered the question
    if (hasAnswered(userId, questionId)) {
      throw new Meteor.Error(400, 'You have already answered this question');
    }

    // validate answer
    const questionAnswer = Questions.findOne({
      _id: questionId
    }).answer;

    // if answer is correct insert user profile
    if (questionAnswer === userAnswer) {
      const createdAt = new Date();
      const answeredQuestion = {
        userId,
        questionId,
        createdAt,
        answer: userAnswer
      };

      return Profiles.insert(answeredQuestion);
    }

    throw new Meteor.Error(400, 'Something is wrong');
  },

  'questions.get'() {

    // question generator
    console.log('getting question');
    const question = Questions.find({
    },{
      limit: 1,
      fields: {
        answer: 0
      }
    }).fetch();
    console.log(question);

    // make sure user has not answered the question before

    // return question
    return question;
  }
});
