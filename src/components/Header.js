import PropTypes from 'prop-types';
import React from 'react'


export default function Header({ setToken }) {    
  
    const logoutStat = () => {
        localStorage.clear();
        setToken('');
    }

    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
                <form className="form-inline">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times" />
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fas fa-cog" />
            </a>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <span className="dropdown-item dropdown-header">Settings</span>
                <div className="dropdown-divider" />
                <button onClick={logoutStat} className="dropdown-item">
                <i className="fas fa-key mr-2" /> Logout
                </button>
            </div>
            </li>
        </ul>
        </nav>

      </div>
    )
  
}

Header.propTypes = {
    setToken: PropTypes.func.isRequired
  };