export default {
  signUp({Meteor, LocalState, FlowRouter}, email, password) {
    Meteor.call('user.signUp', email, password, (err) => {
      if (err) {
        return LocalState.set('USER.SIGN_UP_ERROR', err.message);
      }

      // unset authentication error
      LocalState.set('USER.SIGN_UP_ERROR', null);
      // redirect to /app after successful sign-up
      FlowRouter.go('/who-are-you');
    });
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        LocalState.set('USER.LOGGED_IN_ERROR', err.message);
        return;
      }

      // setting user
      LocalState.set('USER.LOGGED_IN_ERROR', null);
      // maybe redirect to previous page instead of default /app (?)
      FlowRouter.go('/quiz/normal');
    });
  }
};
