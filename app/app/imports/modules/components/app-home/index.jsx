import React from 'react';
import RequireLogin from '../require-login/index.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  button: {
    margin: '8px 16px',
    backgroundColor: 'tomato',
    height: '80px',
    width: '180px'
  },

  label: {
    fontSize: '22px',
    color: '#ffffff',
    textAlign: 'center'
  }
};

class AppHome extends React.Component {
  render() {
    return (
      <RequireLogin>
        <div className="box vertical">
          <h1>Pick Your Game</h1>
          <div className="center horizontal">
            <RaisedButton
              linkButton={true}
              href="/quiz/normal"
              label="Normal Quiz"
              style={style.button}
              backgroundColor='tomato'
              labelStyle={style.label} />
            <RaisedButton
              linkButton={true}
              href="/quiz/timed"
              label="Timed Quiz"
              style={style.button}
              backgroundColor='tomato'
              labelStyle={style.label} />
          </div>
        </div>
      </RequireLogin>
    );
  }
}

export default AppHome;
