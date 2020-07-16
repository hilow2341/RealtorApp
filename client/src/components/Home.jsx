import React, { Component } from "react";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default class Home extends Component{

    render(){

        return(
            <div>
                <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">Home</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Menu</a>
        </p>
        <p className="level-item has-text-centered">
          <p>Realtor App</p>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Reservations</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">Contact</a>
        </p>
      </nav>
            </div>
        )

    }

}