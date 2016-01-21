import React from 'react';

class RequireLogin extends React.Component {
  // temporary solution
  notLoggedIn() {
    // Do something if user is not logged in
    return <p>Not Authorized to see this</p>;
  }

  getContent() {
    const {currentUser} = this.props;
    return currentUser ? this.props.children : this.notLoggedIn();
  }

  render() {
    const {loggingIn} = this.props;

    return (
      <div className="require-login">
        {loggingIn ? <p>Logging in</p> : this.getContent()}
      </div>
    );
  }
}

RequireLogin.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default RequireLogin;
