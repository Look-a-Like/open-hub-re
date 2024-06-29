import React from 'react';
import LoginHeader from './Login/LoginHeader';
import LoginMain from './Login/LoginMain';
import LoginFooter from './Login/LoginFooter';

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t overflow-y-hidden">
      <LoginHeader/>
      <LoginMain/>
      <LoginFooter/>
    </div>
  );
}

export default LoginPage;