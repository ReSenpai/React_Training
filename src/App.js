import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={ () => <ProfileContainer />} />

          <Route path='/messages'
            render={ () => <DialogsContainer />} />

          <Route path='/news'
            render={ () => <News />} />

          <Route path='/music'
            render={ () => <Music />} />

          <Route path='/users'
            render={ () => <UsersContainer />} />

          <Route path='/setting'
            render={ () => <Setting />} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
