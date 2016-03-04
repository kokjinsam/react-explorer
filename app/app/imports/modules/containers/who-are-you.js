import WhoAreYou from '../components/who-are-you/index.jsx';
import { useDeps } from 'react-simple-di';
import { composeWithTracker, composeAll } from 'react-komposer';

export const composer = ({ context }, onData) => {
  const { LocalState } = context();
  const currentUser = LocalState.get('USER.LOGGED_IN');
  onData(null, { currentUser });
};

export const depsMapper = (context, actions) => ({
  login: actions.user.login,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(WhoAreYou);
