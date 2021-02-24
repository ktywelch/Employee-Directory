import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <h1>The Employee Directory</h1>
            <div className = 'links' >
                <Link to="/">Home</Link>
                <a href="/test">Test</a>
            </div>
        </nav>
      );
}
 
export default Navbar;