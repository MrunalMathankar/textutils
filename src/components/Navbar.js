import React from "react"; //to import this react function based component use the term rfc and press enter
// importing the proptypes from npm shortcut for it is impt and then press enter
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">  
         {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link" to="/">
              {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* ****************************** COLOR PALETS ***************************************************************** */}
          <div className="mx-1" id="colorpalets">
            <input className="form-check-input" style={{backgroundColor:"blue"}} type="radio" name="radioNoLabel1" id="radioNoLabel1"  value="blue" onClick={props.setcolor}/> 
          </div>
          <div className="mx-1">
            <input className="form-check-input"  style={{backgroundColor:"red"}} type="radio" name="radioNoLabel2" id="radioNoLabel2" value="red" onClick={props.setcolor}/>
          </div>
          <div className="mx-1">
            <input className="form-check-input"  style={{backgroundColor:"green"}} type="radio" name="radioNoLabel3" id="radioNoLabel3" value="green" onClick={props.setcolor}/>
          </div>
          <div className="mx-1">
            <input className="form-check-input" style={{backgroundColor:"#B116FB"}}  type="radio" name="radioNoLabel4" id="radioNoLabel4" value="#B116FB " onClick={props.setcolor}/>
          </div>
          <div className="mx-1">
            <input className="form-check-input"  style={{backgroundColor:"#38DDFF"}} type="radio" name="radioNoLabel5" id="radioNoLabel5" value="#38DDFF" onClick={props.setcolor}/>
          </div>
          {/* ****************************** DARK MODE ****************************************************************************** */}
          <div className={`form-check form-switch text-${props.mode==='dark'?"white":"black"} mx-2`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"Enable Light Mode":"Enable Dark Mode"}</label>
            </div>
        </div>
      </div>
    </nav>
  );
  
  

}

//we are telling here basically that our proptype should be string only means one can pass only the string to the home , about and title props in the navbar section and not the other data types
//shortcut for writing the propTypes.string is simply write pts and then press enter it will come directly 
//also note that .propTypes here the p is small otherwise it will give error
//.isRequired state that the prop title is required must means we have to set the title anyway but if the default props is set then it is not going to be show the error to us because it will take it from the default props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  home: PropTypes.string,
};

//creating the default props 
//we are creating the default props because in case if we didnt pass the props to the navbar then it will take the default props from here and will set it into the navbar props

Navbar.defaultProps = {
    title:'set title here ',
    about: 'set about text here'
}

