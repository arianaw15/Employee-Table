import React from "react";
import EmployeeCard from "./EmployeeCard";

function Column() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <EmployeeCard />
        </div>
        <div className="col-sm">
          <EmployeeCard />
        </div>
        <div className="col-sm">
          <EmployeeCard />
        </div>
      </div>
    </div>
  );
}

export default Column;
