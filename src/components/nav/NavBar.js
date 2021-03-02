import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <section className="top-nav">
            <ul className="top-nav-bar">
                <li className="fa-icon-li active">
                    <Link className="top-nav-icon" to="/">
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/journal">
                        <i className="fas fa-book"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/schedule">
                        <i className="fas fa-calendar-alt"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/social">
                        <i className="fas fa-users"></i>
                    </Link>
                </li>
                <div className="divider">|</div>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/maps">
                        <i className="fas fa-map-marked-alt"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/entries">
                        <i className="fas fa-feather-alt"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/adventures">
                        <i className="fas fa-mountains"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/achievements">
                        <i className="fas fa-medal"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/memories">
                        <i className="fas fa-photo-video"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/messages">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/settings">
                        <i className="fas fa-user-cog"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="/faqs">
                        <i className="fas fa-question"></i>
                    </Link>
                </li>
                <li className="fa-icon-li">
                    <Link className="top-nav-icon" to="">
                        <i class="fas fa-sign-out"></i>
                    </Link>
                </li>
            </ul>
        </section>
    )
}



