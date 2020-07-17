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
                                <h1>{estate.strEstate}</h1>
                                {/* <img src={meal.strMealThumb} alt="meal-thumbnail" /> */}
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