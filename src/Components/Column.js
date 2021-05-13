import React from 'react'
import EmployeeCard from './EmployeeCard'

function Column() {
    return (
        <div>
            <div className="card-columns">
                <EmployeeCard />
            </div>
            <div className="card-columns">
                <EmployeeCard />
            </div>
            <div className="card-columns">
                <EmployeeCard />
            </div>
        </div>
    )
}

export default Column
