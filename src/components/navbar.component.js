import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExcerTrack</Link>
            <div className="collpase navbar-collapse">
            <u1 className="navbar-nav mr-auto">
            <li className="navbar-nav mr-auto">
            <Link to="/" className="nav-link">Exercises Log</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
            </li>
            </u1>
            </div>
        </nav>
        );
          
    }
}