import React from "react";
import "./Journal.css";
import "../../assets/css/all.css";
import { Link } from "react-router-dom";

export const Journal = () => {
    return (
        <section className="journal-main-section">
            <div className="journal-categories">
                <div className="journal-cat-left">
                    <div className="journal-cat-adventures">
                        <div className="adventures-pic-div">
                            <div className="journal-cat-darken15">
                                <Link className="journal-h2-button" to="/adventures">Adventures</Link>
                            </div>
                        </div>
                    </div>
                    <div className="journal-cat-journal"></div>
                </div>
                <div className="journal-cat-right">
                    <div className="journal-cat-goalsAndAchievements"></div>
                </div>
            </div>
        </section>
    )
}