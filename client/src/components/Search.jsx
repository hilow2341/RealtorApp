import React, { Component } from "react";
import API from "../API";

class Search extends Component {

    state = {
        searchValue: '',
        realEstate: [],
        q: '',
        stateName: '',
        cityName: ''
    };

    handleOnChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSearch = (event) => {
        event.preventDefault();
        console.log("DFGH", this.state.cityName, this.state.stateName)
        API.getRealestate(this.state.cityName, this.state.stateName)
            .then((res) => {
                console.log('RES Fron',  res.data.res);
        this.setState({
            realEstate: res.data.res
        })
             })
            .catch (() => this.setState({
            realEstate: [],
            message: "There's no new listings!"
        })
            )
    }

    getRealestate = () => { }


    render() {
        console.log('STATE', this.state)
        return (
            <div>
                <h1>Welcome to the search app</h1>
                <form>

                    <label>
                        City:
                    <input type='text' name='cityName' value={this.state.cityName} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        State:
                    <input type='text' name='stateName' value={this.state.stateName} onChange={this.handleOnChange} />
                    </label>
                    <button onClick={this.handleSearch}>Search</button>
                </form>
                {}

           

                {/* 
                <input name="text" type="text" placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue} /> */}


                {this.state.realEstate.length > 0 ? (
                    <div>
                        {this.state.realEstate.map((property, index) => (
                            <div key={index}>
                                <h1>{property.address.city}</h1>
                                {/* <h1>{estate.strEstate}</h1> */}
                                {/* <img src={meal.strEstateThumb} alt="estate-thumbnail" /> */}
                            </div>
                        ))}
                    </div>
                ) : (
                        <p>Try searching for real estate!</p>
                    )}

            </div>
        )
    }
}
export default Search;

// makeApiCall = searchInput => {
    //     var searchUrl = ``;
    //     fetch(searchUrl)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(jsonData => {
    //             console.log(jsonData.realestate);
    //             this.setState({ realestate: jsonData.realestate });
    //         });
    // };