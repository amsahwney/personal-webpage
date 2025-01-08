import { useState, useEffect } from "react"

function Landing() {
    const [message, setMessage] = useState("y or n")

    const handleKeyPress = (event) => {
        if (event.key === 'y') {
            window.location.href = '/home'
        } else if ( event.key === 'n') {
            setMessage('input n recieved, press y if you change your mind')
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)
        return () => {
            window.removeEventListener("keydown", handleKeyPress) // this return is called a cleanup function. very handy!
        }
    }, [])

  return (
    <div>   
        <h2> hello, would you like to enter my world?</h2>
        <h2>{message}</h2>
    </div>
  )
}

export default Landing