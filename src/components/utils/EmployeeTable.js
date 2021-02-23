import { Link } from "react-router-dom";

const EmployeeList = (props) => {
    
    const employees = props.employees.results;
   
    const title = props.title;
    
    return ( 
   
            <div className="employee-list">
                <h2>{title}</h2>
                {
                employees.map((employee) => (
                    <div className='employee-preview' key={employee.login.uuid}>
                       <h2>{employee.name.title} {employee.name.first} {employee.name.last}</h2>
                       <p> {employee.name.first} </p>
                    </div>    
                ))
                 
                }
            </div>
         );
    }  

    
 
export default EmployeeList;