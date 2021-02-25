import useFetch from '../utils/useFetch'
import EmployeeTable from '../utils/EmployeeTable'


const Home = () => {
    // this uses a custom hook 
    const {data, isPending, isError} = useFetch('https://randomuser.me/api/?results=200');   
    return (  
        <div className='home'>
        {isError && <div>Scotty we have a problem {isError}</div> }
        {isPending && <div>Data is Loading ...</div> }
        {data && <EmployeeTable employees={data} title={"List of Employees"}/>}
        </div> 
    );
    
}
 
export default Home;

