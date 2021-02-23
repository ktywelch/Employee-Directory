import React, { useState } from "react";
import "ka-table/style.css";

import { kaReducer, Table } from "ka-table";
import { DataType, SortDirection, SortingMode } from "ka-table/enums";
import { getSortedColumns } from "ka-table/Utils/PropsUtils";

const EmployeeTable = (props) => {    
    const employees = props.employees.results;
    const title = props.title;

    const tablePropsInit = {
        columns: [
            { key: 'name.last',  title: 'Last Name', dataType: DataType.String, style: { width: '20%' } },
            { key: 'name.first', title: 'First Name', dataType: DataType.String, style: { width: '20%' } },
            { key: 'location.country', title: 'Country', dataType: DataType.String, style: { width: '30%' }},
            { key: 'email', title: 'Email ID', dataType: DataType.String, style: { width: '20%' } },
            { key: 'gender', title: 'Gender', dataType: DataType.String, style: { width: '10%' } }
 
          ],
          data: employees,
          rowKeyField: "id",
          sortingMode: SortingMode.Single
        }        

    
        const [tableProps, changeTableProps] = useState(tablePropsInit);
        const dispatch = action => {
          changeTableProps(prevState => kaReducer(prevState, action));
        };
        return (
          <>
            <Table {...tableProps} dispatch={dispatch} />
            <div className='employee_table' style={{ marginTop: 20}}>
              <span style={{ fontSize: 12 }}>sorted columns:</span>{" "}
              {getSortedColumns(tableProps).map(
                c => `${c.key}: ${c.sortDirection}; `
              )}
            </div>
          </>
        )
    }  
   
 
export default EmployeeTable;

