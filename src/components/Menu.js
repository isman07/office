import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
            <img src={process.env.PUBLIC_URL + "/dist/img/AdminLTELogo.png"} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">Office</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={localStorage.getItem('phtoken')} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">{localStorage.getItem('token')}</a>
            </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                <Link to="/">
                <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Dashboard
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/value">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-calculator" />
                    <p>
                    Value Type
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/asset">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                    Asset Type
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/lokasi">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-map" />
                    <p>
                    Lokasi
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/barang">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                    Asset & barang
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/user">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-user" />
                    <p>
                    User 
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/lendreturn">
                <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon far fa-calendar-alt" />
                    <p>
                    Peminjaman & Pengembalian
                    </p>
                </a>
                </Link>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon far fa-copy" />
                    <p>
                    Report
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Peminjaman & Pengembalian</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Asset Barang</p>
                    </a>
                    </li>
                </ul>
                </li>
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>

    </div>
    )
  }
}
