import './Navbar.css';

function Navbar() {

    return(
        <nav>
            <ul className='nav-list'>
                <li>
                    <a className='nav-link' href='#'>Home</a>
                </li>
                <li>
                    <a className='nav-link' href='#'>Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;