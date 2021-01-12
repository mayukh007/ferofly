import React from "react";
import "../nav.css";
function Nav()
{
    return(
        <div className="navb">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item active">
                             <a className="nav-link" href="#" style={{marginLeft:"0px !important"}}>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ROOMS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SEE&amp;DO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                      
                    </ul>
                  
                </div>
                <form class="form-inline">
                    <button class="btn navbar-brand mb-0" href="#" type="button">Book a room</button>
                </form>
               
            </nav>
        </div>
    );
}
export default Nav;