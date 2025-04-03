import React, { useState } from 'react';
import './App.css';
import CourseManagement from './components/CourseManagement';
import Dashboard from './components/Dashboard';
import StudentManagement from './components/StudentManagement';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    }
    if (username === 'joash' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <h1><center>Welcome to CMS</center></h1>
        <h5><i><center>"A College is not just a place of learning, but a foundation for innovation, creativity, and the pursuit of excellence."</center></i></h5>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentManagement />;
      case 'courses':
        return <CourseManagement />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="app">
      <nav className="navbar">
        <img src="college.PNG" alt='College' height='70px' width='100px'></img>
        <ul>
          <li>
            <button 
              className={activeTab === 'dashboard' ? 'active' : ''} 
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'students' ? 'active' : ''} 
              onClick={() => setActiveTab('students')}
            >
              Student Management
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'courses' ? 'active' : ''} 
              onClick={() => setActiveTab('courses')}
            >
              Course Management
            </button>
          </li>
          <li>
            <button onClick={() => setLoggedIn(false)} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      
      <main className="content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;







