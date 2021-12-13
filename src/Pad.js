import React from 'react'
import './pad.css'
const Pad = ({ letter, sound }) => {
    const [className, setClassName] = React.useState('Pad')
    const playSound = () => {
        setClassName('PadClick')
        let audio = new Audio(sound)
        audio.play()
        setTimeout(() => {
            setClassName('Pad')
        }, 100);
    }
    return (
        <div className={className} onClick={playSound}>
            {letter}
        </div>
    )
}

export default Pad
