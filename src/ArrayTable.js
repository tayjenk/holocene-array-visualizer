import React from "react"
import Table from "react-bootstrap/Table"

const ArrayTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((dataObj, idx) => (
          <tr key={idx}>
            <td>{dataObj.a}</td>
            <td>{dataObj.b}</td>
            <td>{dataObj.c}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ArrayTable
