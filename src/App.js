import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import AskChef from './Components/AskChefPage/AskChef';
import About from './Components/About';
import Profile from './Components/Profile';
import Landing from './Components/LandingPage/Landing';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';
import FlashDisplay from './Components/FlashDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { flashMessage: null, showFlashMsg: false, flashType: null };
  }

  triggerFlash = (message, type) => {
    this.setState({ flashMessage: message });
    this.setState({ showFlashMsg: false });
    this.setState({ showFlashMsg: true });
    this.setState({ flashType: type });
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="App">
        <Router>
          <IsLoadingAndError>
            <Header />
            {this.state.showFlashMsg && (
              <FlashDisplay type={this.state.flashType} message={this.state.flashMessage} />
            )}

            <Switch>
              {isAuthenticated && (
                <>
                  <Route exact path="/">
                    <Landing />
                  </Route>
                  <Route exact path="/askchef">
                    <AskChef triggerFlash={this.triggerFlash} />
                  </Route>
                  <Route exact path="/profile">
                    <Profile triggerFlash={this.triggerFlash} />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </>
              )}
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </IsLoadingAndError>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
