import { useState } from "react"
import { bioArray as bios } from '../bio-array'

function About() {
    const [isHovered, setIsHovered] = useState(false)
    const [selectedBio, setSelectedBio] = useState("")
    // const [selectedPersona, setSelectedPersona] = useState("")

    const currentBio = bios.find((bio) => bio.persona === selectedBio)
    // const currentPersona = bios.find((persona) => persona.persona === selectedPersona).persona

  return (
    <div>
        {!selectedBio ? (
        <div onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            
            <p>Hover for options</p>

            {isHovered && (<div>
                {bios.map((bio) => (
                    <button key={bio.persona} onClick={()=> setSelectedBio(bio.persona)}>{bio.persona}</button>
                ))}
            </div>)}
        </div>

        ) : (

            <div>
                <h2>{selectedBio}</h2>
                <p>{currentBio.bio}</p>
                <button onClick={()=> setSelectedBio("")}> Go Back </button>
            </div>
        )}

    </div>
  )
}

export default About