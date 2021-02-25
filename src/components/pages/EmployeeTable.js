import React, { useState,useEffect } from "react";
import getDescendantProp from '../utils/getDescendantProp'

const EmployeeTable = (props) => {    
    
    //const employees = props.employees.results;
    const [employees, setEmployees] = useState(props.employees.results);
    const [filteredEmployees, setFilteredEmployees] =  useState([])
    const [searchName, setSerachName] = useState('');
    const [sortedField, setSortedField] = useState(null);
    const [sortDirection, setSortDirection] = useState();
    const [classBtnVal,setClassBtnval ] = useState({name: 'none', country: 'none', email: 'none'})


    // const filteredEmployees = employees.filter ( employee => {
    //     return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase())
        
    //   })
    useEffect(() => {
       setFilteredEmployees (
            employees.filter ( employee => {
                return employee.name.last.toLowerCase().includes(searchName.toLowerCase()) ||  employee.name.first.toLowerCase().includes(searchName.toLowerCase());
            }))
    }, [searchName, employees])

    let sortedEmployees=[...filteredEmployees]

    if (sortedField !== null) {
        console.log(classBtnVal);
    sortedEmployees.sort((a, b) => {
        // because our data is hirearchical need to adjuse field eval

        console.log(sortedField)
          console.log(getDescendantProp(a,sortedField));           
    
          if (getDescendantProp(a,sortedField) < getDescendantProp(b,sortedField)) { 
            return sortDirection === 'ascending' ? -1: 1;
        }
         if (getDescendantProp(a,sortedField) > getDescendantProp(b,sortedField) ) {
        //if (a[sortedField] > b[sortedField] ) {
            return sortDirection === 'ascending' ? 1: -1;
        }
        return 0;
      });
    }
    

        return (
        <div className="container">
            <span>Filter by Name: </span> 
             <input type="text" placeholder="Enter Filter Criteria" onChange={ e => setSerachName(e.target.value)} />
            
              <table className='employee-table pagination' data-pagecount="4">
                  <thead>
                  <tr>     
                      <th></th>
                      <th>
                        <button type="button" onClick={() => {
                            setSortedField ('name.last');
                            sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending');
                             setClassBtnval({name: sortDirection, country: 'none', email: 'none'})
                             }}
                            className={classBtnVal.name}>
                         Name
                         </button>
                      </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('location.country')
                          sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending') 
                          setClassBtnval({name: 'none', country: sortDirection, email: 'none'})
                          }}
                          className={ classBtnVal.country}>
                         Country
                         </button>
                     </th>
                      <th><button type="button" onClick={() => {
                          setSortedField ('email');
                          sortDirection === 'ascending' ? setSortDirection('descending'): setSortDirection('ascending')
                          setClassBtnval({name: 'none', country: 'none', email: sortDirection})
                          }}
                          className={classBtnVal.email}>
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

