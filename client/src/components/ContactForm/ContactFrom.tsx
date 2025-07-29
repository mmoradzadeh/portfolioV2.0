import React, { useState } from "react"
import type { FormEvent } from "react";

const ContactFrom: React.FC = () => {
    const [person, setPerson] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person);

    };
    return (
        <div className="col-lg-7">
            <div className="bg-white rounded-3 p-4 p-md-5 text-dark">
                <h3 className="h4 fw-bold mb-4">Send Me a Message</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={(event) => setPerson({ ...person, name: event.target.value })} type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={(event) => setPerson({ ...person, email: event.target.value })} type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea onChange={(event) => setPerson({ ...person, message: event.target.value })} className="form-control" id="message" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark w-100 py-3">
                        Send Message
                    </button>
                </form >
            </div>
        </div>
    )
}

export default ContactFrom