// import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
// import '../App.css'
// import axios from 'axios'

// class Navbar extends Component {

//     render() {
//         console.log('navbar render, props: ')
//         console.log(this.props);
//         return (
//             <div>
//                 <header className="navbar App-header" id="nav-container">
//                     <div className="navbar-col col-8" >
//                         <section className="navbar-section">

//                             <Link to="/" className="btn btn-warning">
//                                 <span className="text"><h3>Home</h3></span>
//                             </Link>
//                             <Link to="/estimates" className="btn btn-danger">
//                                 <span className="text"><h3>Estimates</h3></span>
//                             </Link>
//                             <Link to="/services" className="btn btn-success">
//                                 <span className="text"><h3>Services</h3></span>
//                             </Link>
//                         </section>

//                     </div>
//                 </header>
//             </div>
//         );
//     }
// }
// export default Navbar

import React from "react";
import LogoImage from "./logoImage.js";
import '../App.css'

function Navbar(props) {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">
                    <LogoImage />
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/estimate">Estimates</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;