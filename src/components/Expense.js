import React, { useState } from 'react'
import { useTrip } from '../utilities/TripContext'
export default function Expense(props) {

    const handleChange = e => props.editExpense(props.expense.id, e)
    const handleDelete = e => props.deleteExpense(props.expense.id, e)

    return (
        <div className="row p-3 mt-4">
            <div className="input-group mb-1">
                
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={props.expense.name || ''}
                        name="name" />
                    <span className="input-group-text">$</span>
                    <input
                        onChange={handleChange}
                        name="cost"
                        type="number"
                        className="form-control"
                        value={props.expense.cost || ''}
                        placeholder="0.00" />
                    <button className="btn btn-outline-danger" onClick={handleDelete} id="button-addon2">Delete</button>
                
            </div>
        </div>



    )
}
