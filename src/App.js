import React from "react"
import Button from "react-bootstrap/Button"
import "./css/App.css"
import ArrayCarousel from "./ArrayCarousel"
import EnterDataForm from "./EnterDataForm"

// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       showCarousel: false,
//     }
//     this.toggleCarousel = this.toggleCarousel.bind(this)
//   }

//   toggleCarousel() {
//     this.setState({ showCarousel: !this.state.showCarousel })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>View My Data</p>
//           <Button
//             variant="outline-secondary"
//             type="button"
//             onClick={this.toggleCarousel}
//           >
//             Click Here
//           </Button>
//           {this.state.showCarousel ? (
//             <ArrayCarousel close={this.toggleCarousel} />
//           ) : null}
//         </header>
//       </div>
//     )
//   }
// }

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showCarousel: false,
      inputForms: ["input-0"],
      dataset: []
    }
    this.toggleCarousel = this.toggleCarousel.bind(this)
    this.newInput = this.newInput.bind(this)
    this.addDataForm = this.addDataForm.bind(this)
  }

  toggleCarousel() {
    this.setState({ showCarousel: !this.state.showCarousel })
  }

  newInput(input) {
    this.setState({ dataset: this.state.dataset.concat(input) })
    console.log(this.state)
  }

  addDataForm() {
    const newForm = `input-${this.state.inputForms.length}`
    this.setState({ inputForms: this.state.inputForms.concat([newForm]) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Enter Data Below</p>
          {/* <div>
            <EnterDataForm
              newInput={this.newInput}
              addDataForm={this.addDataForm}
            />
          </div> */}
          <div>
            {this.state.inputForms.map((inputTitle, idx) => (
              <EnterDataForm
                newInput={this.newInput}
                addDataForm={this.addDataForm}
                key={idx}
              />
            ))}
          </div>
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
