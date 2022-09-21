import React, { useRef } from 'react'
import useVideoPlayer from '../../../../utils/hooks/useVideoPlayer'

import vdo from "../../../../assets/videos/video.mp4"
import playIcon from "../../../../assets/icons/Icon-Play.svg"
import pauseIcon from "../../../../assets/icons/Icon-Pause.svg"
import playIconSmall from "../../../../assets/icons/Icon-PlaySmall.svg"
import pauseIconSmall from "../../../../assets/icons/Icon-PauseSmall.svg"
import soundIcon from "../../../../assets/icons/Icon-Sound.svg"
import muteIcon from "../../../../assets/icons/Icon-Mute.svg"

import './video.css'

const Video = () => {

    const video = useRef(null)
    const {
        playing,
        muted,
        progressBar,
        togglePlay,
        toggleMute,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleRefreshVideo
    } = useVideoPlayer(video)



    return (
        <div className="video__container">
            <video
                src={vdo}
                ref={video}
                onTimeUpdate={handleOnTimeUpdate}
                onEnded={handleRefreshVideo}
                className="video"
                onClick={togglePlay}
                style={{ cursor: "pointer" }}
            />
            <button
                className="icon__btn play__btn"
                onClick={togglePlay}
                style={{ display: playing ? "none" : "block" }}
            >
                <img src={playIcon} alt="Play Icon" />
            </button>

            <div className="controls">
                <div className="actions">
                    <button className="icon__btn" onClick={togglePlay}>
                        <img src={playing ? pauseIconSmall : playIconSmall} alt="" />
                    </button>
                </div>
                <input className="video__progress" type="range" min={0} max={100} value={progressBar} onChange={(e) => handleVideoProgress(e)} />
                <div className="actions">
                    <button className="icon__btn" onClick={toggleMute}>
                        <img src={muted ? muteIcon : soundIcon} alt="" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Video


// VIDEO DEFAULT
{/* <video src={vdo} controls>
                
            </video> */}