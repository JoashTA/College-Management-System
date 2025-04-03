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


/*return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <img src="">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);




example 1
function display()
{
  const name={fname:'Joash',lname:'Abraham'};
  return name;
}
function App() {
  return (
    <div>
    <h1>{display().fname}</h1>
    <h2>{display().lname}</h2>
    </div>
    
  )
}

export default App;

ex2
function display()
{
  const name={fname:'Joash',lname:'Abraham'};
  return name;
}
function App() {
  return (
    <div style={{border:'solid'}}>
    <h1>{display().fname}</h1>
    <h2>{display().lname}</h2>
    </div>
    
  )
}

ex3
function add(a,b)
{
  var c=parseInt(a)+parseInt(b);
  return c;
}
const a=window.prompt("Enter A");
const b=window.prompt("Enter B");
function App() {
  return (
    <h1>{add(a,b)}</h1>
    
  )
}

ex4 
function checks(a,b)
{
  if(parseInt(a)>parseInt(b))
    return "a is greater";
  else if(parseInt(a)<parseInt(b))
    return "b is greater";
  else
  return "a equals b";
}
const a=window.prompt("Enter A");
const b=window.prompt("Enter B");
function App() {
  return (
    <h1>{checks(a,b)}</h1>
    
  )
}

function checks(a,b)
{
  if(parseInt(a)>parseInt(b))
    return "a is greater";
  else if(parseInt(a)<parseInt(b))
    return "b is greater";
  else
  return "a equals b";
}
const a=window.prompt("Enter A");
const b=window.prompt("Enter B");
function App() {
  return (
    <div>
    <h1>{checks(a,b)}</h1>
    <br/>
    <img src="./components/images.jpg" alt="img" height="200" width="200"/>
    <br/>
    <user/>
    </div>
  )
}
*/