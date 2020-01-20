//user input fields

import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default class EnterDataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: "",
      b: "",
      c: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              placeholder="x point"
              size="sm"
              name="a"
              value={this.state.a}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              placeholder="y point (line 1)"
              size="sm"
              name="b"
              value={this.state.b}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              placeholder="y point (line 2)"
              size="sm"
              name="c"
              value={this.state.c}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button
            variant="outline-secondary"
            type="button"
            size="sm"
          >
            + Add New Data Set
          </Button>
        </Form.Row>
      </Form>
    )
  }
}
