import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import ApplicationsPage from './ApplicationsPage';
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/MainPage' element={<MainPage/>}/>
          <Route path='/Applications' element={<ApplicationsPage/>}/>
          <Route path='/Companies' element={<CompaniesPage/>}/>
          <Route path='/Jobs' element={<JobsPage/>}/>
          <Route path='/Settings' element={<SettingsPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;