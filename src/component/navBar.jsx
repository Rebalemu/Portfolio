function NavBar(){
    return(
        <>
        
            <ul className="nav-bar">
                <li><a href="#hero"><i className="fas fa-home"></i> Home</a></li>
                <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
                <li><a href="#service"><i className="fas fa-cog"></i> Services</a></li>
                <li><a href="#portfolio"><i className="fas fa-briefcase"></i> Portfolio</a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
        </>
    );
}
export default NavBar;