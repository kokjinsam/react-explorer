import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class WhoAreYou extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;

    /* need client side checking */

    const {login} = this.props;

    login(email, password);
  }

  render() {
    return (
      <section className="section">
        <h1>Report Yourself!</h1>
        <form className="form" onSubmit={this.submit}>
          <TextField
            hintText="Email"
            type="text"
            style={{
              width: '100%'
            }} />
          <TextField
            hintText="Password"
            type="password"
            style={{
              width: '100%'
            }} />
            <RaisedButton
              type="submit"
              label="Begin"
              primary={true}
              style={{
                marginTop: '16px'
              }} />
        </form>
        <p>Don't have an account? <a href="/sign-up">Sign up here</a>.</p>
      </section>
    );
  }
}

export default WhoAreYou;
