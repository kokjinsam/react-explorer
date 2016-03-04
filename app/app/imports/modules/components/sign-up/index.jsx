import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;
    let retypedPassword = e.target[2].value;

    /* need client side checking */

    const {signUp} = this.props;

    signUp(email, password);
  }

  render() {
    return (
      <section className="section">
        <h1>New? Sign up here.</h1>
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
          <TextField
            hintText="Retype Password"
            type="password"
            style={{
              width: '100%'
            }} />
          <RaisedButton
            type="submit"
            label="Sign me up"
            primary={true}
            style={{
              marginTop: '16px'
            }} />
        </form>
        <p>Already have an account? <a href="/who-are-you">Login here</a>.</p>
      </section>
    );
  }
}

export default SignUp;
