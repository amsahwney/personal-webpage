import React, { useState } from 'react'

function Newsletter() {
    const [message, setMessage] = useState('submit')
    const [email, setEmail] = useState('')
    const handleEmailChange = (event) => setEmail(event.target.value)

    function resetForm() {
        setEmail("")
    }

    async function sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const newEmail = {email}

        // REPLACE backendshit with CORRECT URL
        const response = await fetch('backendshit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(newEmail)
        })

        resetForm()
        setMessage("yum!")
        await sleep(2)
        setMessage('submit')

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>sign up for sporadic inbox surprises :P </p>

            <label htmlFor = "email"> your email: </label>
            <input required = {true}
            email="email"
            onChange={handleEmailChange}
            value={email}/>
            
            <input type="submit" value={message} />

        </form>
    </div>
  )
}

export default Newsletter