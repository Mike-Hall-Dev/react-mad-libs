import React from "react"

function Story({ noun, noun2, adjective, color, restart }) {
    const message = `The ${adjective} ${noun} was best friends with the ${color} ${noun2}`
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

export default Story;