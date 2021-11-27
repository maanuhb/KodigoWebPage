import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <><>
        <IconContext.Provider value={{color: "#fff"}}>
        <div>
        <div className={sidebar ? 'sidebar': 'sidebar close'}>
            <div className="logo-details">
            
            <i onClick={showSidebar}><BsIcons.BsFillBootstrapFill/></i>
            <a>
                <Link  Link to="/">
                    <span className="logo_name">Company</span>
                </Link>
                
            </a>
            
            </div>
          <ul className="nav-links">
            <li>
              <a><Link to="/dashboard">
                <i><BsIcons.BsFillGrid1X2Fill/></i>
                <span className="link_name">Dashboard</span>
              </Link>
                
              </a>
              <ul className="sub-menu blank">
                <li>
                    <Link to="/dashboard">
                        <a className="link_name" >Dashboard</a> 
                    </Link> 
                    </li>
              </ul>
            </li>
            {/*nuevo menu*/}
            <li>
              <div className="iocn-link">
                <a>
                    <Link to="/user">
                        <i><FaIcons.FaUser /></i>
                        <span className="link_name">User</span>
                    </Link>
                  
                </a>
              </div>
              <ul className="sub-menu blank">
                <li>
                    <Link to="/user">
                    <a className="link_name" href="#">User</a>
                    </Link>
                </li>
              </ul>
            </li>
            {/*termina menu*/}

            {/*nuevo menu*/}
            <li>
              <div className="iocn-link">
                <a>
                    <Link to="/favorites">
                        <i><AiIcons.AiFillHeart /></i>
                        <span className="link_name">Favorites</span>
                    </Link>
                  
                </a>
              </div>
              <ul className="sub-menu blank">
                <li>
                    <Link to="/favorites">
                    <a className="link_name" href="#">Favorites</a>
                    </Link>
                </li>
              </ul>
            </li>
            {/*termina menu*/}
            <li>
              <div className="iocn-link">
                <a>
                    <Link to="/settings">
                        <i><IoIcons.IoMdSettings /></i>
                        <span className="link_name">Settings</span>
                    </Link>
                  
                </a>
              </div>
              <ul className="sub-menu blank">
                <li>
                    <Link to="/settings">
                    <a className="link_name" href="#">Settings</a>
                    </Link>
                </li>
              </ul>
            </li>
            {/*nuevo menu*/}
            <li>
              <div className="iocn-link">
                <a>
                    <Link to="/information">
                        <i><AiIcons.AiFillInfoCircle/></i>
                        <span className="link_name">Information</span>
                    </Link>
                  
                </a>
              </div>
              <ul className="sub-menu blank">
                <li>
                    <Link to="/information">
                    <a className="link_name" href="#">Information</a>
                    </Link>
                </li>
              </ul>
            </li>
            {/*termina menu*/}
          </ul>
        </div>
      </div>
      
        </IconContext.Provider>
        
        </>
        </>
    );
}

export default Navbar;
