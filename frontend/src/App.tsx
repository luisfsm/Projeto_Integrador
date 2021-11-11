import React from 'react';
import Cadastro from './pages/cadastro/Cadastro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Sobre from './pages/sobre/Sobre';
import Donate from './pages/donate/Donate';



function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/cadastrar'>
              <Cadastro />
            </Route>

            <Route path='/sobre'>
              <Sobre />
            </Route>

            <Route path='/donate'>
              <Donate />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  )
}
export default App;