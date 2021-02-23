import useFetch from '../utils/useFetch'
//EmployeeList just moved the map function to a sub component
import EmployeeList from '../utils/EmployeeList'
import EmployeeTable from '../utils/EmployeeTable'


const Home = () => {
    // this uses a custom hook 
    const {data, isPending, isError} = useFetch('https://randomuser.me/api/?results=50');   
    return (  
        <div className='home'>
        {isError && <div>Scotty we have a problem {isError}</div> }
        {isPending && <div>Data is Loading ...</div> }
        {/* {data && <EmployeeList employees={data} title={"List of Employees"}/>}   */}
        {data && <EmployeeTable employees={data} title={"List of Employees"}/>}
        </div> 
    );
    
}
 
export default Home;

