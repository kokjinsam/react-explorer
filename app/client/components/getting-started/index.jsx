import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';

import npmPackages from './npm-packages';
import meteorPackages from './meteor-packages';

const makeList = function (item) {
  return (
    <div key={item.name} className="card small">
      <a href={item.link} className="touch-target"></a>
      {item.name}
    </div>
  );
};

const npmList = npmPackages.map(item => makeList(item));
const meteorList = meteorPackages.map(item => makeList(item));

const style = {
  downBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30vh',
    minWidth: '56px',
    width: '56px',
    height: '56px',
    borderRadius: '50%'
  },

  iconInDownBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '56px'
  }
};

/* GettingStarted component starts here */
const GettingStarted = () => (
  <div>
    <div className='cover'>
      <h1>React Explorer</h1>
      <p>Are you ready to play a game?</p>
      <RaisedButton
        label="Let's Play"
        linkButton={true}
        href="/app"
        primary={true} />
      <FlatButton
        linkButton={true}
        href="#what-is-react-explorer"
        style={style.downBtn}
        secondary={true}>
        <FontIcon
          className="material-icons"
          style={style.iconInDownBtn}>expand_more</FontIcon>
      </FlatButton>
    </div>
    <section id="what-is-react-explorer" className="section odd">
      <h2>What is React Explorer</h2>
      <p>
        React Explorer is a short quiz game to test out your knowledge on React, Meteor 1.3 and Mantra. React Explorer is built upon Mantra specifications. For a complete list of libraries used in React Explorer, please see here. Source code for React Explorer is avalaible on Github.
      </p>
    </section>

    <section id="npm-libraries-used" className="section even">
      <h2>NPM Packages Used in React Explorer</h2>
      <div className="row">
        {npmList}
      </div>
    </section>

    <section id="npm-libraries-used" className="section odd">
      <h2>Meteor Packages Used in React Explorer</h2>
      <div className="row">
        {meteorList}
      </div>
    </section>
  </div>
);

export default GettingStarted;
