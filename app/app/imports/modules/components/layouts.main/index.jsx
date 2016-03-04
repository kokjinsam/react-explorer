import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import ContentLink from 'material-ui/lib/svg-icons/content/link';

/* need to find a place to initate this */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      appBarShadow: 0
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (FlowRouter.current().route.name != 'hello.getting-started') {
      this.setState({
        appBarShadow: 1
      });
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div className='layout'>
        <AppBar
        onLeftIconButtonTouchTap={this.handleToggle}
        zDepth={this.state.appBarShadow}
        style={{
          backgroundColor: '#ff6347'
        }} />

        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})} >
          <MenuItem
            leftIcon={<ContentLink/>}
            onTouchTap={this.handleClose}>What is React Explorer</MenuItem>
          <MenuItem
            leftIcon={<ContentCopy/>}
            onTouchTap={this.handleClose}>NPM Packages Used</MenuItem>
          <MenuItem
            leftIcon={<ContentCopy/>}
            onTouchTap={this.handleClose}>Meteor Packages Used</MenuItem>
            <MenuItem
              leftIcon={<ContentCopy/>}
              onTouchTap={this.handleClose}>Github</MenuItem>
        </LeftNav>

        <main className="main">{this.props.content()}</main>
      </div>
    );
  }
}

export default MainLayout;
