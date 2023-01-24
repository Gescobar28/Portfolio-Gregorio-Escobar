import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import NavBar from './components/NavBar/NavBar';


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Portfolio}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
