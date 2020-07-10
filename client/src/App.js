import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props)

  }

  render(){
  return (
    <div className="App">
     <Button color="primary">My Bulma button</Button>
     <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..." defaultValue={""} />
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
  <a  a className="button is-info">Submit</a>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <label className="checkbox">
                  <input type="checkbox" /> Press enter to submit
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article> 
    </div>
  );
  }

}
export default App;