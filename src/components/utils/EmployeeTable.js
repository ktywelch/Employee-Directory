import React, { useState } from "react";
import "ka-table/style.css";


const EmployeeTable = (props) => {    
    
    const employees = props.employees.results;
    const [sortedField, setSortedField] = useState(null);
    const [sortAscending, setSortAscending] = useState();

    const requestSort = () => {};

    let sortedEmployees=[...employees];
    if (sortedField !== null) {
        
    sortedEmployees.sort((a, b) => {
        // because our data is hirearchical need to adjuse field eval
        let p = `a.${sortedField} < b.${sortedField}`;
        let q = `a.${sortedField} > b.${sortedField}`;

        if (eval(p) ) {
            return sortAscending === true ? -1: 1;
        }
        if (eval(q)) {
            return sortAscending === true ? 1: -1;
        }
        return 0;
      });
    }
    

        return (
  
        <div className="container">    
              <table className='employee-table'>
                  <thead>
                  <tr>     
                      <th></th>
                      <th>
                        <button type="button" onClick={() => {
                            setSortedField ('name.last');
                            sortAscending === true ? setSortAscending(false): setSortAscending(true);}}
                            className={ 'name'+sortAscending}>
                         Name
                         </button>
                      </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('location.country')
                          sortAscending === true ? setSortAscending(false): setSortAscending(true) }}
                          className={ 'country'+sortAscending}>
                         Country
                         </button>
                     </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('email');
                          sortAscending === true ? setSortAscending(false): setSortAscending(true);}}
                          className={'email'+sortAscending}>
                         Email
                         </button>
                     </th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                         sortedEmployees.map((employee) => (
                            <tr className='table-row' key={employee.login.uuid}>
                                <td>
                                    <img src={employee.picture.thumbnail} alt="random thumbnail of person"/>
                                </td>
                                <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
                                <td>{employee.location.country}</td>
                                <td>{employee.email}</td>
                                
                            </tr>
                        ))
                      }
                  </tbody>
              </table>
          </div>
 
      );
  }
  
      
   
 
export default EmployeeTable;

