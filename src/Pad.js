import React from 'react'
import './pad.css'
const Pad = ({ letter, sound }) => {
    // await for letter key press then call playSound
    React.useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === letter) {
                playSound()
            }
        })
    }, [])
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
