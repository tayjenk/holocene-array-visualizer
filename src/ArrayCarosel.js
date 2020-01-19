import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ArrayTable from './ArrayTable';
import ArrayGraph from './ArrayGraph';

const inputData = [
  { a: 1, b: 3, c: 10 },
  { a: 3, b: 20, c: 12 },
  { a: -1, b: -5, c: -4 }
]

const ArrayCarosel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ArrayTable data={inputData}/>
        <Carousel.Caption>
          <p>Table View</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ArrayGraph data={inputData}/>
        <Carousel.Caption>
          <p>Graph View</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ArrayCarosel
