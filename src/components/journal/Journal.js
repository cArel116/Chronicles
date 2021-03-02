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
                    <div className="journal-cat-journal">
                        <div className="journal-pic-div">
                            <div className="journal-cat-darken15">
                                <Link className="journal-h2-button" to="">Journal</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="journal-cat-right">
                    <div className="journal-cat-achievements">
                        <div className="achievements-pic-div">
                            <div className="journal-cat-darken15">
                                <Link className="journal-h2-button" to="/achievements">
                                    <p className="goals-p">Goals &</p>
                                    <p className="achievements-p">Achievements</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}