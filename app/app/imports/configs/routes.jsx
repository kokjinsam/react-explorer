import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

/* import components here */
import GettingStarted from '../components/getting-started/index.jsx';
import AppHome from '../components/app-home/index.jsx';

/* import containers here */
import WhoAreYou from '../containers/who-are-you';
import SignUp from '../containers/sign-up';
import NormalQuiz from '../containers/normal-quiz';

export const initRoutes = (MainLayoutCtx) => {
  FlowRouter.route('/', {
    name: 'hello.getting-started',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GettingStarted />)
      });
    }
  });

  FlowRouter.route('/who-are-you', {
    name: 'hello.who-are-you',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<WhoAreYou />)
      });
    }
  });

  FlowRouter.route('/sign-up', {
    name: 'hello.sign-up',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SignUp />)
      });
    }
  });

  FlowRouter.route('/quiz', {
    name: 'quiz.home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AppHome />)
      });
    }
  });

  FlowRouter.route('/quiz/normal', {
    name: 'quiz.normal',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NormalQuiz />)
      });
    }
  });

  FlowRouter.route('/quiz/timed', {
    name: 'quiz.timed',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AppHome />)
      });
    }
  });
};
