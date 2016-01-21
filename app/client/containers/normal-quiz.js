import NormalQuiz from '../components/normal-quiz/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Session} = context();
  const question = Session.get('question');
  onData(null, {question});
};

export const depsMapper = (context, actions) => ({
  getQuestion: actions.quiz.getQuestion,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NormalQuiz);
