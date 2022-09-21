import { useEffect, useState } from "react"

const useVideoPlayer = (video) => {

    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(false)
    const [progressBar, setProgressBar] = useState(0)
    const [fullScreen, setFullScreen] = useState(false)


    // HANDLE PLAYING / PAUSE

    const togglePlay = () => {
        setPlaying(!playing)
    }

    useEffect(() => {

        playing ? video.current.play() : video.current.pause()

    }, [playing, video])

    // HANDLE PROGRESS

    const handleOnTimeUpdate = () => {
        const progress = (video.current.currentTime / video.current.duration) * 100
        setProgressBar(progress)
    }

    // DRAG PROGRESS BAR

    const handleVideoProgress = (event) => {

        // if (isNaN(event.target.duration))   // duration is NotaNumber at Beginning.
        //   return;
        const manualChange = parseInt(event.target.value)
        video.current.currentTime = (video.current.duration / 100) * manualChange
        setProgressBar(manualChange)
    } 

    // HANDLE MUTE 

    const toggleMute = () => {
        setMuted(!muted)
    }

    useEffect(() => {
        muted ? (video.current.muted = true) : (video.current.muted = false)
    }, [muted, video])


    const toggleFullScreen = () => {
        if (video.current) {
                video.current.requestFullscreen();
        }
        setFullScreen(!fullScreen)
    }

    const handleRefreshVideo = () => {
        video.current.load();
        setPlaying(!playing);
      };


    return {
        playing,
        muted,
        progressBar,
        fullScreen,
        togglePlay,
        toggleMute,
        handleOnTimeUpdate,
        handleVideoProgress,
        toggleFullScreen,
        handleRefreshVideo
    }

}



export default useVideoPlayer