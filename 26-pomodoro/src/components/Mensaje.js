import React from 'react'
import Sound from 'react-sound'
import soundfile from './cool_sound.mp3'


const Mensaje = (props) => {
    return (
        <>
            <div className="meta">
                {props.mensaje}
            </div>
            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}

            />
        </>
    )
}

export default Mensaje
