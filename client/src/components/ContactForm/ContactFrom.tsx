import React, { useRef } from "react"
import type { FormEvent } from "react";

const ContactFrom: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const person = {
        name: '',
        email: '',
        message: ''
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null && emailRef.current !== null && messageRef.current !== null) {
            person.name = nameRef.current.value;
            person.email = emailRef.current.value;
            person.message = messageRef.current.value;
            console.log(person);
        }
    };
    return (
        <div className="col-lg-7">
            <div className="bg-white rounded-3 p-4 p-md-5 text-dark">
                <h3 className="h4 fw-bold mb-4">Send Me a Message</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input ref={nameRef} type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input ref={emailRef} type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea ref={messageRef} className="form-control" id="message" rows={4} required></textarea>
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