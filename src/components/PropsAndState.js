import React, { useState } from "react"

export const PropsAndState = ({ Arathaín }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return (
        <>
            <h3>Welcome, {Arathaín}! </h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>CLICK ME</button>
        </>
    )
}