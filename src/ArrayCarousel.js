import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import ArrayTable from "./ArrayTable"
import ArrayGraph from "./ArrayGraph"
import "./ArrayCarousel.css"

const inputData = [
  { a: -1, b: -5, c: -4 },
  { a: 1, b: 3, c: 10 },
  { a: 3, b: 20, c: 12 }
]

const ArrayCarousel = props => {
  return (
    <Carousel className="carousel" interval={null} indicators={false}>
      <Carousel.Item>
        <h4>Data Table View</h4>
        <ArrayTable data={inputData} />
        <div className="close">
          <Button variant="outline-secondary" onClick={props.close}>
            Close
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h4>Graph View</h4>
        <ArrayGraph data={inputData} />
        <div className="close">
          <Button variant="outline-secondary" onClick={props.close}>
            Close
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default ArrayCarousel
