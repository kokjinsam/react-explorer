import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
  'user.signUp'(email, password) {
    check(email, String);
    check(password, String);

    let newUserId = Accounts.createUser({
      email: email,
      password: password
    });

    if (newUserId) {
      return newUserId;
    }

    throw new Meteor.Error(300, 'Account Registration unsuccessful.');
  }
});
