import React from "react"
import { Line } from "react-chartjs-2"

const inputData = [
  { a: 1, b: 3, c: 10 },
  { a: 3, b: 20, c: 12 },
  { a: -1, b: -5, c: -4 }
]

const xLabels = []
inputData.map(dataObj => xLabels.push(dataObj.a))
console.log(xLabels)

const bPoints = []
inputData.map(dataObj => bPoints.push(dataObj.b))
console.log(bPoints)
const cPoints = []
inputData.map(dataObj => cPoints.push(dataObj.c))
console.log(cPoints)
const state = {
  labels: xLabels.sort((a,b) => a - b),
  datasets: [
    {
      label: "B Points",
      data: bPoints
    },
    {
      label: "C Points",
      data: cPoints
    }
  ]
}

export default class ArrayGraph extends React.Component {
  render() {
    return (
      <div>
        <Line data={state} />
      </div>
    )
  }
}
