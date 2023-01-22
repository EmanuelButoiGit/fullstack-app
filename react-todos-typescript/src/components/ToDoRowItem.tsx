import React from "react"

export const TodoRowItem: React.FC<{
  rowNumber: number, 
  rowDescription: string, 
  rowAssigned: string, 
  deleteTodo: Function
}> = (props) => {

    // we can return only one parent element(one div, one tr, etc)
    return(
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
        <th scope = 'row'>{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
      </tr>
    )
}