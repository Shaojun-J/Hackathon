import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    callPost() {
        console.log("updateClient");
        fetch('http://localhost:9000/users_test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // enctype: 'multipart/form-data'
            },
            body: JSON.stringify({
                "id": 654321,
                "first_name": "Peter",
                "last_name": "Pan"
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log("response:" + response.first_name + " " + response.last_name);
                console.log(JSON.stringify(response));
            })

    }

    componentDidMount() {
        // this.callAPI();
        this.callPost();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
