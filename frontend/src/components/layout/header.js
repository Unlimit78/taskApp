import React, { Component } from 'react'

export class Header extends Component{
    render(){
        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Archive</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tasks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Contact us</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Sign in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                </ul>
            </nav>

        )
    }
}
export default  Header