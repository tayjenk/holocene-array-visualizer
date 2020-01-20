//expanded App.js file setting foundation for user input fields to create data

import React from "react"
import Button from "react-bootstrap/Button"
import "./App.css"
import ArrayCarousel from "./ArrayCarousel"
//import EnterDataForm from "./EnterDataForm"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showCarousel: false,
      // forms: [],
      // dataset: []
    }
    this.toggleCarousel = this.toggleCarousel.bind(this)
    //this.newInput = this.newInput.bind(this)
    //this.addDataForm = this.addDataForm.bind(TouchList)
  }

  toggleCarousel() {
    this.setState({ showCarousel: !this.state.showCarousel })
  }

  // newInput(input) {
  //   // this.setState({ dataset: this.state.dataset.concat(input) })
  //   console.log(this.state)
  // }

  // addDataForm() {
  //   const newForm = `input-${this.state.forms.length}`
  //   this.setState({forms: this.state.forms.concat([newForm])})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>View My Data</p>
          {/* <p>Enter Data Below</p> */}
          {/* <div>
            <EnterDataForm newInput={this.newInput} />
          </div> */}
          <Button
            variant="outline-secondary"
            type="button"
            onClick={this.toggleCarousel}
          >
            View Data
          </Button>
          {this.state.showCarousel ? (
            <ArrayCarousel close={this.toggleCarousel} />
          ) : null}
        </header>
      </div>
    )
  }
}
