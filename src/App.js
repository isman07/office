import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import useToken from './useToken';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Dashboard from './pages/sidebarcontent/Dashboard';
import Value from './pages/sidebarcontent/Value'
import Asset from './pages/sidebarcontent/Asset'
import Lokasi from './pages/sidebarcontent/Lokasi'
import Barang from './pages/sidebarcontent/Barang'
import User from './pages/sidebarcontent/User'
import LendReturn from './pages/sidebarcontent/LendReturn'




function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="wrapper">
        <Header setToken={setToken}/>
        <Menu/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/value' element={<Value/>}/>
          <Route path='/asset' element={<Asset/>}/>
          <Route path='/lokasi' element={<Lokasi/>}/>
          <Route path='/barang' element={<Barang/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/lendreturn' element={<LendReturn/>}/>
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
