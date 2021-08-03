import React from 'react'
import { useState } from 'react'
import TableForm from './TableForm'

const initialTables = [
    {
        tableNumber: 1,
        size: 4,
    },
    {
        tableNumber: 2,
        size: 7,
    },
    {
        tableNumber: 3,
        size: 2,
    },
]

function findNextTable(tables) {
    if (tables.length === 0) { 
        return 1 
    }
    let tableNumber;
    let isAvailable = true;
    for (let i = 0; i < tables.length; i++) {
        isAvailable = true;
        tableNumber = i + 1;
        for (let j = 0; j < tables.length; j++) {
            if (tableNumber === tables[j].tableNumber) {
                isAvailable = false;
                break;
            }
        }
        if (isAvailable === true) {
            break;
        }
    }
    if (isAvailable === false) {
        tableNumber = tables.length + 1;
    }
    return tableNumber;
}

const TableFormList = ({restaurant, setRestaurant}) => {
    const [tables, setTables] = useState(initialTables)

    function addTable() {
        const data = tables;

        let newTableNumber = findNextTable(data)

        let tableObj = {
            tableNumber: newTableNumber,
            size: null,
        }
        setTables([...tables, tableObj])
    }

    function removeTable(tableNumber) {
        const newState = tables.filter(table => table.tableNumber !== tableNumber);
        setTables(newState)
    }

    function toggleTable(tableNumber) {
        const newState = tables.map(table => {
            if (table.tableNumber === tableNumber) {
                table.size = null;
            }
            return table
        })
        setTables(newState)
    }

    function isAvailable(number) {
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].tableNumber === number) {
                return false;
            }
        }
        return true;
    }

    function editTable(data, initialTableNumber) {
        let available = isAvailable(data.tableNumber);
        if (available) {
            return false 
        }
        if (data.tableNumber !== initialTableNumber) {
            const newState = tables.filter(table => table.tableNumber !== initialTableNumber);
            setTables([...newState,{tableNumber: data.tableNumber, size: data.size}])
        } else {
            const newState = tables.map(table => {
                if (table.tableNumber === data.tableNumber) {
                    table.size = data.size
                }
                return table
            })
            setTables(newState)
        }
        let newState = restaurant;
        newState.tables = tables
        setRestaurant(newState)
        console.log(restaurant)
    }

    tables.sort((a,b) => a.tableNumber - b.tableNumber);
    return (
        <div>
            <div className="tableFormList">
                { tables.map((table) => <TableForm key={table.tableNumber} table={table} removeTable={removeTable} editTable={editTable} toggleTable={toggleTable}/> ) }
            </div>
            <button onClick={addTable}>+</button>
        </div>
    )
}

export default TableFormList
