import React, { Component } from "react";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';



export default class Login extends Component{

    render(){

        return(
<div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        {/* add value */}
                    <input className="input is-success" type="text" placeholder="Text input" />
                     <span className="icon is-small is-left">
                        <i className="fas fa-user"/>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"/>
                    </span>
                    </div>
                        <p className="help is-success">This username is available</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        {/* add value */}
                        <input className="input is-success" type="password" placeholder="Text input" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"/>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"/>
                    </span>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>

</div>
        )

    }

}