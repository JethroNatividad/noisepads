import React from 'react'
import './pad.css'
const Pad = ({ letter, sound }) => {
    const playSound = () => {
        let audio = new Audio(sound)
        audio.play()
    }
    return (
        <div className="Pad" onClick={playSound}>
            {letter}
        </div>
    )
}

export default Pad
