import React from "react"
import Button from "react-bootstrap/Button"
//import logo from './logo.svg';
import "./App.css"
import ArrayCarosel from "./ArrayCarosel"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showCarosel: false
    }
    this.toggleCarosel = this.toggleCarosel.bind(this)
  }

  toggleCarosel() {
    console.log(this.state.showCarosel)
    this.setState({ showCarosel: !this.state.showCarosel })
    console.log(this.state.showCarosel)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>View My Array</p>
          <Button
            variant="outline-secondary"
            type="button"
            onClick={this.toggleCarosel}
          >
            Click Here
          </Button>
        {this.state.showCarosel ? <ArrayCarosel /> : null}
        </header>
      </div>
    )
  }
}
