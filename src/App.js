import React from "react"
import Button from "react-bootstrap/Button"
import "./App.css"
import ArrayCarousel from "./ArrayCarousel"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showCarousel: false,
    }
    this.toggleCarousel = this.toggleCarousel.bind(this)
  }

  //function will change carousel
  toggleCarousel() {
    this.setState({ showCarousel: !this.state.showCarousel })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>View My Data</p>
          <Button
            variant="outline-secondary"
            type="button"
            onClick={this.toggleCarousel}
          >
            Click Here
          </Button>
          {this.state.showCarousel ? (
            <ArrayCarousel close={this.toggleCarousel} />
          ) : null}
        </header>
      </div>
    )
  }
}
