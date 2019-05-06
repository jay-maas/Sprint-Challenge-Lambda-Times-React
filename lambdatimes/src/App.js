import React from 'react';
import UserPage from './components/Pages/UserPage';
import withAuth from './components/Authentication/withAuth';
import LogIn from './components/Pages/LogIn';
import TopBar from './components/TopBar';



const App = () => {
  return (
    <div>
      <CompWithAuth />
    </div>
  );
}

const CompWithAuth = withAuth(LogIn)(UserPage)

export default App;
