import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import SettingContainer from './components/Setting/SettingContainer';
import NewsContiner from './components/News/NewsContainer';
import LoginContainer from './components/Login/LoginContainer';

const App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={ () => <ProfileContainer />} />

          <Route path='/messages'
            render={ () => <DialogsContainer />} />

          <Route path='/news'
            render={ () => <NewsContiner />} />

          <Route path='/music'
            render={ () => <Music />} />

          <Route path='/users'
            render={ () => <UsersContainer />} />

          <Route path='/setting'
            render={ () => <SettingContainer />} />

          <Route path='/login'
            render={ () => <LoginContainer />} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
