import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './pages/Home';
import Users from './pages/Users';


function App() {
  return (
    
     <div className='App'>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
      </Routes>
      </BrowserRouter>
    
     </div>
    
    
  );
};


export default App;
