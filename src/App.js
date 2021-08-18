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
              <div className= "meiuca">
          <Switch >
            <Route path="/" exact>

                <Drinks />
            </Route>
            <Route path="/contato">
              
                <Form/>
                <Button texto= "Clique Aqui"/>
                <h1> Olá mundo</h1>
              
            </Route>
            
            <Route path="*">
    
                <h1> 404 Not Found</h1>
              
            </Route>
          </Switch>
              </div>
        </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
