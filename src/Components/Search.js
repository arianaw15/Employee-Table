import React from "react";
import Column from './Column';
import EmployeeCard from './EmployeeCard'

function Search(props) {
function onChange(){
    props.filter(employee => employee.name.type.toLowerCase().startsWith('{event.target.value}'))
}
  return (
<div>
    <div className="search">
      <form>
        <label>
          Search By First Letter 
        </label><br/>
        <input type="text" name="firstName" />
      </form>
    </div>
    <Column onChange={onChange}/>
    </div>
  );
}

export default Search;
