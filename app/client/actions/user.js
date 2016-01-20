export default {
  signUp({Meteor, LocalState, FlowRouter}, email, password) {
    Meteor.call('user.signUp', email, password, (err) => {
      if (err) {
        return LocalState.set('ACCOUNT_ERROR', err.message);
      }

      console.log('sign upp done');
      FlowRouter.go('/app');
    });
  },

  login() {
    console.log('clicked login');
  }
};
