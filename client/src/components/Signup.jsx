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
{/* home */}
<div >

  <section className="hero is-info is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            
              <p>RelatorApp </p>
            
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
          
             </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
          Sign up!
          </h1>
          <h2 className="subtitle">
            This is the best place to start when buying a new house.
          </h2>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
              <input className="input is-danger" type="email" placeholder="Email input" name="email" value={this.state.email} onChange={this.handleChange}/>
              <input className="input is-success" type="text" name="username" placeholder="Text input" value={this.state.username} onChange={this.handleChange} />
                <input name="password" className="input is-success" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Text input"  />
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
              </p>
              <p className="control">
              <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
              <div className="control">
                        <Link to="/login">
                        <button className="button is-link is-light" >Click Here if you have logged in already</button>
                        </Link>
                    </div>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>         
        

    </div>
        )

    }

}