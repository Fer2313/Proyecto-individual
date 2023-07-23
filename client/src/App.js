import './App.css';
import { useLocation } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage/HomePage';
import SearchBar from './components/SearchBar';
import Detail from './components/Detail/Detail';
import FormPage from './components/FormPage/FormPage';
import { useSelector } from 'react-redux';
 function App() {
  const location=useLocation()
  const countries= useSelector((s)=>s.countries)
  return (
    <div className="App">
 {location.pathname==="/"||location.pathname==="/form"?null:<div><SearchBar/></div>}
      <Routes>
   <Route exact path='/' element={<LandingPage/>}/>
   <Route path='/home' element={<HomePage countries={countries}/>}/>
   <Route path='/detail' element={<Detail/>}/>
   <Route path='/form' element={<FormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
