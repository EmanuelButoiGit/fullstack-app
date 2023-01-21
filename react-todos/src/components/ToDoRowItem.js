// we can pass with props a pair of key (rowNumber) and value (todos[0].rowNumber)
function TodoRowItem(props){

    // we can return only one parent element(one div, one tr, etc)
    return(
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
        <th scope = 'row'>{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
      </tr>
    )
}

export default TodoRowItem