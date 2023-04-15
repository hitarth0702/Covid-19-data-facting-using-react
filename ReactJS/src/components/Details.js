import React from "react";
import axios from "axios"
import Summary from "./Summary";
import Countries from "./Countries";

class Details extends React.Component {

    state = {
        countries: [],
        global: [],
        currentDate: null,
        loading: true
    }
  
    async componentDidMount() {
        const res = await axios.get("https://api.covid19api.com/summary");
        console.log(res);
        this.setState({ countries: res.data.Countries });
        this.setState({ global: res.data.Global });
        this.setState({ currentDate: res.data.Date });
        this.setState({ loading: false });
    }
 
    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <>
                <div>

                    <Summary summary={this.state.global} currentDate={this.state.currentDate} />
                    <table>
                        <thead>
                            <tr>
                                <th id="start">Countries</th>
                                <th>New Confirmed</th>
                                <th>Total Recovered</th>
                                <th>Slug</th>
                                <th>ID</th>
                                <th>CountryCode</th>
                                <th>Date</th>
                                <th id="end">Total Deaths</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.countries.map(country => (
                                <Countries countries={country} key={country.Country} />
                            ))}
                        </tbody>
                    </table>

                </div>
            </>
        );
    }
}

export default Details;


// ComponentDidMount
// The componentDidMount() method allows us to execute the React code when the component 
// is already placed in the DOM (Document Object Model). This method is called
// during the Mounting phase of the React Life-cycle i.e after the component is rendered


// Async 
// React Async is a utility  for declarative promise resolution and data fetching.
// It makes it easy to handle asynchronous UI states, without assumptions about the shape
// of your data or the type of request.


// State
// What Is 'State' in ReactJS? The state is a built-in React object that is used to 
// contain data or information about the component. A component's state can change over 
// time; whenever it changes, the component re-renders.


// setState
// The setState() method enqueues all of the updates made to the component state and
// instructs React to re-render the component and its children with the updated 
// state


