import {useRef} from 'react'
import BlinkyAn from '../../assets/blink/BLinky_HTML5_Canvas.mp4'

function Blinky() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current.play()
      }, 2500)
    }
  }

  return (
    <div>
         <video  
        ref={videoRef}
        autoPlay  
        muted 
        onEnded={handleVideoEnd}
        src={BlinkyAn}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Blinky