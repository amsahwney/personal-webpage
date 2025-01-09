import React, { useState } from 'react'

function Newsletter() {
    const [message, setMessage] = useState('submit')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handleNameChange = (event) => setName(event.target.value)

    function resetForm() {
        setEmail("")
        setName("")
    }

    async function sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000))
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const newEmail = {email, name}

        const response = await fetch('http://localhost:5555/subscribe', {
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

            <label htmlFor = "name"> lemme get to know you on a first name basis ;) <br/> </label>
            <input required = {true}
            name="name"
            onChange={handleNameChange}
            value={name}/>
            
            <br/>

            <label htmlFor = "email"> and your email, DUH: <br/> </label>
            <input required = {true}
            email="email"
            onChange={handleEmailChange}
            value={email}/>
             
             <br/>
            
            <input type="submit" value={message} />

        </form>
    </div>
  )
}

export default Newsletter