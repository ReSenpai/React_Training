import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = () => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/messages' render={ () => <Dialogs /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/setting' render={ () => <Setting /> } />
        </div>
      </div>
    </HashRouter>

  );
}

export default App;
