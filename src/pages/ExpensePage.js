import React, { useState } from "react"
import { useTrip } from '../utilities/TripContext'
import Expense from '../components/Expense'
import history from "../utilities/history";
import { useParams } from 'react-router-dom'


export default function ExpensePage() {
    const {trip_id} = useParams()
    const [expenses, setExpenses] = useState([])
    const { addExpenses } = useTrip()


    function createExpense() {
        //const foundTrip = myTrips.find(trip => trip.trip_token == tripToken)
        setExpenses(previousExpenses => {
            let expenseCopy = [...previousExpenses]
            const expense = {
                name: '',
                cost: 0,
                id: Date.now(),
                isNew: true,
                //trip_id: foundTrip.id
            }
            expenseCopy.push(expense)
            return expenseCopy
        })
    }
    function editExpense(id, e) {
        setExpenses(previousExpenses => previousExpenses.map(expense => {
            if (expense.id === id) {
                expense = { ...expense, [e.target.name]: e.target.value }
            }
            return expense
        }))
    }
    function deleteExpense(id, e) {
        setExpenses(previousExpenses => previousExpenses.filter(expense => expense.id !== id))
    }
    function submitExpense(e) {

        // create expense
        // setExpenses(previousExpenses => previousExpenses.map(expense => {
        //     if (expense.isNew) {
        //         expense = { ...expense, [e.target.name]: e.target.value }
        //     }
        //     return expense
        // }))
        const data = {expenses, trip_id}
        addExpenses(data);

    }
    const mappedExpenses = expenses.map((expense, index) => {
        return (
            <Expense key={index} expense={expense} editExpense={editExpense} deleteExpense={deleteExpense} />
        )

    })

    return (
        <div className="container">
            <div className="row mt-5 text-center">
                <div className="col-md-6 offset-md-3">
                    <div className="special p-2 mt-3">
                        <h1>Manage Expenses</h1>
                        <div className="col mt-4">
                            <button className="btn btn-outline-primary" onClick={createExpense}>Create a new expense</button>
                            {mappedExpenses}
                            <div className="col mt-4">
                                <button onClick={submitExpense} className="btn btn-outline-primary mt-3">Add Expenses</button>
                            </div>
                            <div className="row mb-2">
                                <div className="col mt-4">
                                    <button onClick={() => history.goBack()} className="btn btn-primary">Back to current trip</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
