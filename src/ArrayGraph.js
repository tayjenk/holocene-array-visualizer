import React from "react"
import { Line } from "react-chartjs-2"
import "./css/Data.css"

const ArrayGraph = props => {

  const {xLabels, bPoints, cPoints } = extractData(props.data)

  const state = {
    labels: xLabels,
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

  return (
    <div className="data-container">
      <Line data={state} />
    </div>
  )
}

export default ArrayGraph

function extractData(array) {
  const graphPoints = {
    xLabels: [],
    bPoints: [],
    cPoints: []
  }

  array.forEach(dataObj => {
    graphPoints.xLabels.push(dataObj.a)
    graphPoints.bPoints.push(dataObj.b)
    graphPoints.cPoints.push(dataObj.c)
  })

  return graphPoints
}
