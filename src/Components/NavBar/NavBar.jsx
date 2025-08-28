import'./NavBar.css'

const NavBar = () => {
    return(
        <div className='nav'>
            <div className ="nav-logo">EV-olution</div>
            <ul className="nav-menu"></ul>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className ='nav-contact'>Contact</li>
        </div>
    )
}

export default NavBar