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

    if (!Meteor.userId()) {
      throw new Meteor.Error(400, 'Please login');
    }

    let userId = Meteor.userId();

    // check if user has already answered the question
    if (hasAnswered(userId, questionId)) {
      throw new Meteor.Error(400, 'You have already answered this question');
    }

    // validate answer
    const questionAnswer = Questions.findOne({
      _id: questionId
    }).answer;

    let result = null;
    // if answer is correct insert user profile
    if (questionAnswer === userAnswer) {
      result = Profiles.upsert(
        {userId},
        {
          $push: {
            questions: questionId
          }
        }
      );
    } else {
      throw new Meteor.Error(400, 'Wrong answer');
    }

    return result;
  },

  'questions.get'() {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'Please login to continue');
    }

    const userId = Meteor.userId();
    const userProfile = Profiles.find({userId},{limit: 1}).fetch();

    let question = null;
    if (userProfile && userProfile.length >= 1) {
      // grab question
      const answeredQuestion = userProfile[0].questions;
      question = Questions.find({_id: { $nin: answeredQuestion}},{limit: 1}).fetch();
    } else {
      // get any question
      question = Questions.find({},{limit: 1}).fetch();
    }

    let mutatedQuestion = null;
    // combine choices and answer
    const choices = question[0].choices;
    choices.push(question[0].answer);
    mutatedQuestion = {
      _id: question[0]._id,
      question: question[0].question,
      choices
    };

    // return question
    return mutatedQuestion;
  }
});
