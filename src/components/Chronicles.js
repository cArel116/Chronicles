import React from "react"
import "./Chronicles.css"
import "../assets/css/all.css"

export const Chronicles = () => (
    <>

        <div class="journal-pop-up-modal" hidden>
            <section class="pop-up-journal">
                <div class="journal-page-left">
                    <div class="journal-page-footer-left">
                        <a href="">Options</a>
                        <p>1</p>
                        <a href="">Prev</a>
                    </div>
                </div>
                <div class="journal-page-right">
                    <div class="journal-page-footer-right">
                        <a href="">Next</a>
                        <p>2</p>
                        <a href="">Close</a>
                    </div>
                </div>
            </section>
        </div>

        {/* Added darkening filter */}
        <div class="darken20">

            {/* NAV */}
            <section class="top-nav">
                <span class="top-nav-bar">
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-home"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-book"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-users"></i>
                        </a>
                    </div>
                    <div class="divider">|</div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-map-marked-alt"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-feather-alt"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-mountains"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-medal"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-photo-video"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-user-cog"></i>
                        </a>
                    </div>
                    <div class="fa-icon-div">
                        <a href="" class="top-nav-icon">
                            <i class="fas fa-question"></i>
                        </a>
                    </div>
                </span>
            </section>

            {/* WEATHER & DATE */}
            <section class="weather-date-section">
                <div class="weather-date-div">
                    <span class="homepage-heading">
                        <h2 class="date">February 12, 2021</h2>
                        <h2 class="temp">47°</h2>
                    </span>
                </div>
            </section>

            {/* BOTTOM NAV */}
            <section class="bottom-nav">
                <span class="home-footer">
                    <div class="bottom-nav-heading">
                        <a href="">
                            <div class="footer-nav-radial">
                                <h3 class="home-footer-nav">Journal</h3>
                            </div>
                        </a>
                    </div>
                    <div class="footer-divider">|</div>
                    <div class="bottom-nav-heading">
                        <a href="">
                            <div class="footer-nav-radial">
                                <h3 class="home-footer-nav">Schedule</h3>
                            </div>
                        </a>
                    </div>
                    <div class="footer-divider">|</div>
                    <div class="bottom-nav-heading">
                        <a href="">
                            <div class="footer-nav-radial">
                                <h3 class="home-footer-nav">Social</h3>
                            </div>
                        </a>
                    </div>
                </span>
            </section>
        </div>

    </>
)