import './App.css';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import Drinks from './components/Drinks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch >
            <Route path="/" exact>

              <div className= "meiuca">
                <Drinks />
              </div>
            </Route>
            <Route path="/contato">
              
                <Form/>
                <Button/>
                <h1> Olá mundo</h1>
              
            </Route>
            <Route path="/jojo" exact>

                <h1> 404 muda muda muda muda muda muda</h1>
              
            </Route>
            <Route path="*">
    
                <h1> 404 muthafoca</h1>
              
            </Route>
          </Switch>
        </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
