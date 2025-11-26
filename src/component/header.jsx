import NavBar from "./navBar";  
import { useState } from "react";

function Header(){
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <section className="header-container">
            <div className="title">
                <h1>Portfolio</h1>
            </div>
            <div className={`menu-bar ${isNavVisible ? 'active' : ''}`}>
                <div className="toggleButton" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <NavBar />
            </div>
        </section> 
    );
}

export default Header;