import NormalQuiz from '../components/normal-quiz/index.jsx';
import { useDeps } from 'react-simple-di';
import { composeWithTracker, composeAll } from 'react-komposer';

export const composer = ({ context }, onData) => {
  const { Session, LocalState } = context();
  const readyNext = LocalState.get('QUIZ.READY_NEXT');
  const isCorrect = LocalState.get('QUIZ.CORRECT_ANSWER');
  const question = Session.get('question');
  onData(null, { question, readyNext, isCorrect });
};

export const depsMapper = (context, actions) => ({
  getQuestion: actions.quiz.getQuestion,
  validateAnswer: actions.quiz.validateAnswer,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NormalQuiz);
