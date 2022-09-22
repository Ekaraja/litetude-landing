import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import vdo from "../../../../assets/videos/homevideo3.mp4"
import "./video.css"

function Video() {

    // const ref = useRef(null);


const vdoOptions = {
    controls: ['play', 'play-large', 'progress', 'current-time', 'volume'],
    settings: ["captions", "quality", "speed", "loop"]
  };

const videoSrc = {
    type: "video",

    sources: [
      {
        src: vdo,
        type: 'video/mp4',
      }
    ]
  };


  return (
    <>
    <div className="video__container">
        <div className="video__wrapper">
            <Plyr options={vdoOptions} source={videoSrc} id="home-video"/>
        </div>
    </div>
    </>
  )
  
  
}

export default Video

