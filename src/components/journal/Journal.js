import React from "react"
import "./Journal.css"
import "../../assets/css/all.css"

export const Journal = () => {
    <>
        <div className="journal-pop-up-modal" hidden>
            <section className="pop-up-journal">
                <div className="journal-page-left">
                    <div className="journal-page-footer-left">
                        <a href="">Options</a>
                        <p>1</p>
                        <a href="">Prev</a>
                    </div>
                </div>
                <div className="journal-page-right">
                    <div className="journal-page-footer-right">
                        <a href="">Next</a>
                        <p>2</p>
                        <a href="">Close</a>
                    </div>
                </div>
            </section>
        </div>
    </>
}