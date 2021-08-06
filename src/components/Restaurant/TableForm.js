import React, {useState} from 'react'

const TableForm = ({table, removeTable, editTable, toggleTable}) => {
    const initialState = {tableNumber: table.tableNumber, size: ''};
    const [formState, setFormState] = useState(initialState);
    function handleSubmit(event) {
        event.preventDefault();
        setFormState(formState)
        let didEdit = editTable(formState, table.tableNumber)
        console.log(didEdit)
        if (didEdit === false) { 
            alert("already have that table number!");
        } else {
            setFormState(initialState) 
        }
    }
    function handleChange(event) {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const formJSX = (<form onSubmit={handleSubmit}>
                    <div className="table">
                     <label className="tableElem" htmlFor="tableNumber">Number</label>
                     <input
                     className="tableElem"
                         id="tableNumber"
                         type="number"
                         onChange={handleChange}
                         value={formState.tableNumber}
                     />
                     <label className="tableElem" htmlFor="size">Size</label>
                     <input
                     className="tableElem"
                         id="size"
                         type="number"
                         onChange={handleChange}
                         value={formState.size}
                     />
                    </div>
                     <button className="tableElem tableSubmit" type="submit">&#10004;</button>
                 </form>);

    const filledTable = (<React.Fragment>
        <p className="tableElem">Table: {table.tableNumber}</p>
        <p className="tableElem">Size: {table.size}</p>
        <button className="tableElem" onClick={() => toggleTable(table.tableNumber)}>Edit</button>
        <button className="tableElem" onClick={() => removeTable(table.tableNumber)}>Remove</button>
    </React.Fragment>);

    return (
        <div className="tableForm">
            {table.size !== null ? filledTable : formJSX}
        </div>
    )
}

export default TableForm
