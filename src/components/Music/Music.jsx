import React from 'react';
import style from './Music.module.css'

const Music = (props) => {
    return (
        <div>
            <audio controls
                src="https://stream.nightride.fm/nightride.mp3">
            </audio>
        </div>
    )
}

export default Music;