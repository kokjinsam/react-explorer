import RequireLogin from '../components/require-login/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  const currentUser = !!Meteor.user();
  const loggingIn = Meteor.loggingIn();
  onData(null, {currentUser, loggingIn});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(RequireLogin);
