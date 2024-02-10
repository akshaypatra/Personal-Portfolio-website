import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className="row-1"><NavBar/></div>
        <div className='row-2'>
        <Routes>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Work' element={<WorkPage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
        </Routes>
          </div>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
