import { useForm, type FieldValues } from "react-hook-form"

import AlertError from "../AlertError/AlertError";

const ContactFrom = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <div className="bg-white rounded-3 p-4 p-md-5 text-dark">
            <h3 className="h4 fw-bold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input {...register('name', {
                        required: "You must enter your name",
                        minLength: {
                            value: 3,
                            message: "Your name must be at least 3 characters"
                        }
                    })} id="name" type="text" className="form-control" />
                    {typeof errors.name?.message === 'string' && <AlertError>{errors.name.message}</AlertError>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email', {
                        required: "You must enter your email", pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "You must enter a valid email address"
                        }
                    })} id="email" type="email" className="form-control" />
                    {typeof errors.email?.message === 'string' && <AlertError>{errors.email.message}</AlertError>}
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea {...register('message', {
                        required: "Please write a few word ;)",
                        minLength: {
                            value: 10,
                            message: "Surely, can do better than that :|"
                        }
                    })} id="message" className="form-control" rows={4}></textarea>
                    {typeof errors.message?.message === 'string' && <AlertError>{errors.message.message}</AlertError>}
                </div>
                <button type="submit" className="btn btn-dark w-100 py-3">
                    Send Message
                </button>
            </form >
        </div>

    )
}

export default ContactFrom