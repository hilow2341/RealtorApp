import React, { Component } from "react";
import axios from "axios";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Link } from "react-router-dom";



export default class Signup extends Component{
    constructor() {
		super()
		this.state = {
			username: '',
            password: '',
			email: '',

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
		event.preventDefault()
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        const {email, username, password} = this.state;
		//request to server to add a new username/password
		axios.post('/user/signup', {
			username,
            password,
            email,
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
        <div className="field">
                        <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-danger" type="email" placeholder="Email input" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"/>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"/>
                        </span>
                    </div>
        </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        
                    <input className="input is-success" type="text" name="username" placeholder="Text input" value={this.state.username} onChange={this.handleChange} />
                     <span className="icon is-small is-left">
                        <i className="fas fa-user"/>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"/>
                    </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        
                        <input name="password" className="input is-success" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Text input"  />
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
                        <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="control">
                        <Link to="/login">
                        <button className="button is-link is-light" >Click Here if you have logged in already</button>
                        </Link>
                    </div>
                </div>
    </div>
        )

    }

}