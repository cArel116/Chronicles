import React from "react"
import "./Chronicles.css"
import "../assets/css/all.css"

export const Chronicles = () => (
    <>

        <div class="journal-pop-up-modal" hidden>
            <section class="pop-up-journal">
                <div class="journal-page-left">
                    <div class="journal-page-footer-left">
                        <a href="url">Options</a>
                        <p>1</p>
                        <a href="url">Prev</a>
                    </div>
                </div>
                <div class="journal-page-right">
                    <div class="journal-page-footer-right">
                        <a href="url">Next</a>
                        <p>2</p>
                        <a href="url">Close</a>
                    </div>
                </div>
            </section>
        </div>

        {/* Added darkening filter */}
        <div class="darken20">

            {/* NAV */}
            <section class="top-nav">
                <span class="top-nav-bar">
                    <i class="fas fa-home"></i>
                    <i class="fas fa-book"></i>
                    <i class="fas fa-calendar-alt"></i>
                    <i class="fas fa-users"></i>
                    <div class="divider">|</div>
                    <i class="fas fa-map-marked-alt"></i>
                    <i class="fas fa-feather-alt"></i>
                    <i class="fas fa-mountains"></i>
                    <i class="fas fa-medal"></i>
                    <i class="fas fa-photo-video"></i>
                    <i class="fas fa-envelope"></i>
                    <i class="fas fa-user-cog"></i>
                    <i class="fas fa-question"></i>
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

            <section class="home-footer">

            </section>
        </div>

    </>
)