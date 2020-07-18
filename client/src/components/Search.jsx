import React, { Component } from "react";
import API from "../API";

class Search extends Component {

    state = {
        searchValue: '',
        realEstate: [],
        q: ''
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    }

    getRealestate = () => {
        API.getRealestate(this.state.q)
            .then(res => this.setState({
                realEstate: res.data
            })
            )
            .catch(() => this.setState({
                realEstate: [],
                message: "There's no new listings!"
            })
            )
    }

    render() {

        return (
            <div>
                <h1>Welcome to the search app</h1>
                <input name="text" type="text" placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue} />
                <button onClick={this.handleSearch}>Search</button>

                {this.state.realestate ? (
                    <div>
                        {this.state.realestate.map((estate, index) => (
                            <div key={index}>
                                <h1>{estate.result.properties.thumbnail}</h1>
                                <h2>{estate.result.properties.address.line}</h2>
                                <h3>{estate.result.properties.address.city}</h3>
                                <h3>{estate.result.properties.address.state_code}</h3>
                                <h2>{estate.result.properties.price}</h2>
                                <h3>{estate.result.properties.baths}</h3>
                                <h3>{estate.result.properties.beds}</h3>
                                <h4>{estate.result.properties.description}</h4>
                                <h3>{estate.result.properties.agents.photo.href}</h3>
                                <h3>{estate.result.properties.agents.name.href}</h3>
                                
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