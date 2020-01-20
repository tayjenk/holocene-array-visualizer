import React from "react"
import { Line } from "react-chartjs-2"
import "./Data.css"

const ArrayGraph = props => {
  const xLabels = []
  const bPoints = []
  const cPoints = []

  props.data.map(dataObj => {
    xLabels.push(dataObj.a)
    bPoints.push(dataObj.b)
    cPoints.push(dataObj.c)
  })

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
