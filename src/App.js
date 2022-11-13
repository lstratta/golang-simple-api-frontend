import { Router, Routes, Route } from 'react-router';

import ViewPosts from './view-posts/ViewPosts.jsx'
import './App.css';
import Header from './header/Header.jsx';
import bootstrap from 'bootstrap'


function App() {

  const SERVER_URL="http://127.0.0.1:1111"

  return (

    <Router>

      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/allposts' element={<ViewPosts server_url={SERVER_URL}/>} />
        
      </Routes>

    </Router>

  );
}

export default App;
