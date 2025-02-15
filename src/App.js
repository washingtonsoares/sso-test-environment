import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import UserNotLogged from './components/Organisms/UserNotLogged'
import UserLogged from './components/Organisms/UserLogged'
import Navbar from './components/Atoms/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/user-not-logged">
                <UserNotLogged />
              </Route>
              <Route path="/user-logged">
                <UserLogged />
              </Route>
              <Route path="/">
                <UserNotLogged />
              </Route>
            </Switch>
          </div>
        </Router>
        <div className="arena-chat" data-publisher="globoesporte" data-chatroom="5sb4" data-position="bottom"></div>
      </div>
  );
}
export default App;
