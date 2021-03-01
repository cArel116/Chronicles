import React from "react";
import "./Journal.css";
import "../../assets/css/all.css";

export const Journal = () => {
    return (
        <section className="journal-main-section">
            <div className="journal-categories">
                <div className="journal-cat-left">
                    <div className="journal-cat-adventures"></div>
                    <div className="journal-cat-journal"></div>
                </div>
                <div className="journal-cat-right">
                    <div className="journal-cat-goalsAndAchievements"></div>
                </div>
            </div>
        </section>
    )
}