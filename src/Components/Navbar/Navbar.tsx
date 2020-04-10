import React from "react";
import "./NavbarStyle.css";
import logo from "../../assets/images/fish1.png";
import { Link } from "react-router-dom";
import { useGlobalState } from '../../Store/MainState/state2';

const Navbar = () => {

 const value = useGlobalState('counter');
  // const dispatch = useDispatch();
  // const addToCart = useCallback(() => dispatch({ type: 'ADD_TO_CART' }), [dispatch]);
  return (
    <div>
    
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="img" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <div className="dropdown-menu">
                        <Link                                             
                         to="" className="dropdown-item">
                          Action
                        </Link>
                        <Link to="" className="dropdown-item">
                          Another action
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="" className="nav-link">
                        Cart ({value})
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
