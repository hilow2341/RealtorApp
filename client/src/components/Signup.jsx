import React, { Component } from "react";
import axios from "axios";
import passport from "../passport/passport";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';



export default class Signup extends Component{
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

    render(){

        return(
    <div>
        <div class="field">
                        <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"/>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"/>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
        </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        {/* add value */}
                    <input className="input is-success" type="text" name="username" placeholder="Text input" value={this.state.username} onChange={this.handleChange} />
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
                        <input className="input is-success" type="password" placeholder="Text input"  />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"/>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"/>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name="question" />Looking to Sell
                        </label>
                        <label className="radio">
                            <input type="radio" name="question" />Looking to Buy
                        </label>
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

// for line 16
// value={this.state.username} onChange={this.handleChange}