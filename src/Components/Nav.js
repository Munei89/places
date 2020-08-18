import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div >
            <nav>
                <h1>Logo</h1>
                <ul className="NavLinks" >
                    <Link to="/About" style={{color:'white'}}>
                    <li>About</li>
                    </Link>
                    <Link to="/Shop" style={{color:'white'}}>
                    <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
