import React, { useEffect, useState } from 'react'
import "./style.css"

export const Feedback = () => {
    const [ft, setFt] = useState('')
    const [email, setEmail] = useState('')
    const [ta, setTa] = useState('')

    useEffect(() => {
        setFt(`${document.getElementById('ftype').value}`)
    }, [])

    const handleft = () => {
        setFt(`${document.getElementById('ftype').value}`)
    }

    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }

    const handleTachange = (e) => {
        setTa(e.target.value)
    }

    const handleclick = (e) => {
        e.preventDefault()
        console.log(`email from ${email}\n ${ta}`)

        window.Email.send({
            // SecureToken: '1396aece-75e8-423b-b42d-5515eb008c39',
            Host: "smtp.elasticemail.com",
            Username: "adeicns91@gmail.com",
            Password: "D73EF16D9FCE6F17667598F672747A43D65A",
            To: 'adeicns91@gmail.com',
            From: 'adeicns91@gmail.com',
            Subject: ft,
            Body: `email from ${email} the message is : ${ta}`
        }).then(
            message => alert(message)
        );

        // console.log(ft, email, ta)
    }

    // console.log(ft)

    return (
        <>
            <div className="feedback">
                <form onSubmit={handleclick} className='form'>
                    <div className="title">
                        Feedback Form and Suggestion Form
                    </div>
                    <select name="feedtype" id="ftype" onChange={handleft}>
                        <option value="Feedback">Feedback</option>
                        <option value="Suggestion">Suggestion</option>
                    </select>
                    {/* <input type="text" name="subject" placeholder="Subject of the Mail" required /> */}
                    <input type="email" placeholder="Your Email" onChange={handleEmailchange} value={email} required />
                    <textarea rows="5" cols="30" placeholder="Your Feedback or Suggestion" onChange={handleTachange} value={ta} required></textarea>
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}
