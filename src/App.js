import React, { Component,Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';
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

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const NewsContiner = lazy(() => import('./components/News/NewsContainer'));
const Music = lazy(() => import('./components/Music/Music'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const SettingContainer = lazy(() => import('./components/Setting/SettingContainer'));

class App extends Component {

  componentDidMount() {
    this.props.startInitialization();
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
