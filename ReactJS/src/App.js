// import logo from './logo.svg';
import './App.css';
import Details from "./components/Details";
// import { Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CasesTime from './components/subcomponents/CasesTime';
import Statewise from './components/subcomponents/Statewise';
import Tested from './components/subcomponents/Tested';
import Menu from './Menu';
import Other from './components/subcomponents/Other';
import WIP from './components/subcomponents/WIP';

function App() {
  return (
    <>
      <Menu />

      <Routes>

        <Route exact path='/' element={<Details />} />

        <Route path='/statewise' element={<Statewise />} />

        <Route path='/casestimeseries' element={<CasesTime />} />

        <Route path='/tested' element={<Tested />} />

        <Route path='/other' element={<Other />} />

        <Route path='/WIP' element={<WIP />} />

      </Routes> 

      {/* <div className="App">
        <Details />
      </div> */}
    </>
  );
}

export default App;
