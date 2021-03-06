import React, { Component, lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { startInitialization } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Container, Row, Col } from 'react-bootstrap';
import { withSuspense } from './hoc/withSuspense';
import { ReactComponent as Error404 } from './assets/icons/error_404.svg';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContiner = lazy(() => import('./components/News/NewsContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const SettingContainer = lazy(() => import('./components/Setting/SettingContainer'));

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    // alert('Some error occured');
    console.log(promise);
  }

  componentDidMount() {
    this.props.startInitialization();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render () {
    if (!this.props.isInitialized) {
      return <Preloader />
    }
    return (
      <HashRouter>
        <Container fluid>
          <Row>
            <Col>
              <Navbar />
            </Col>
            <Col xs={ 6 }>
              <Switch>
                <Route exact path='/'
                  render={ () => <Redirect to={'/profile'} />} />

                <Route path='/profile/:userId?'
                  render={ () => <ProfileContainer />} />
      
                <Route path='/messages'
                  render={ withSuspense(DialogsContainer) } />
      
                <Route path='/news'
                  render={ withSuspense(NewsContiner)} />
      
                <Route path='/music'
                  render={ withSuspense(Music)} />
      
                <Route path='/users'
                  render={ withSuspense(UsersContainer)} />
      
                <Route path='/setting'
                  render={ withSuspense(SettingContainer)} />
      
                <Route path='/login'
                  render={ () => <LoginContainer />} />
                <Route path='*'
                  render={ () => <Error404 />} />
              </Switch>
            </Col>
            <Col>
              <HeaderContainer />
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  } 
}

const mapStatetoProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default connect(mapStatetoProps, {
  startInitialization
})(App);
