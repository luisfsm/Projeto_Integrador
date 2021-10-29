import React from 'react';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
        <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  )
}
export default App;