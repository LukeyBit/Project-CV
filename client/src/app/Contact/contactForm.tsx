'use client';
import axios from 'axios';
import { useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';
import useAlert from '@/hooks/useAlert';

export default function ContactForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '', token: '' });
    const { addAlert } = useAlert();

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleCaptchaChange(token: string | null) {
        if (token != null) setFormData({ ...formData, token: token });
        if (token == null) setFormData({ ...formData, token: '' });
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        if (formData.token === '') {
            addAlert({ id: 'alert', message: 'Please complete the captcha', type: 'warning', className: '' });
            return;
        } else if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.message === '') {
            addAlert({ id: 'alert', message: 'Please fill out all fields', type: 'warning', className: '' });
            return;
        }
        
        axios.post(process.env.NEXT_PUBLIC_API_URL ?? 'not-a-real-url', formData)
            .then(response => {
                if (response.status === 200) {
                    addAlert({ id: 'alert', message: 'Message sent successfully', type: 'success', className: '' });
                } else if (response.status === 400) {
                    addAlert({ id: 'alert', message: response.data.message, type: 'warning', className: '' });
                } else {
                    addAlert({ id: 'alert', message: 'Something went wrong', type: 'error', className: '' });
                }
            })
            .catch(error => {
                console.error(error);
                addAlert({ id: 'alert', message: 'Something went wrong', type: 'error', className: '' });
            });
    }

    return (
        <form className='container-glass flex flex-col items-center justify-center gap-8 w-full md:w-[90%] lg:w-[70%] px-6 py-10 lg:p-14'>
            <div className='flex flex-col items-center justify-center mb-4'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Contact</h1>
                <h2 className='text-2xl lg:text-4xl font-semibold'>Get in touch</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-6 px-4 w-full text-xl h-fit'>
                <div className='flex flex-col items-start w-full h-full'>
                    <label className='ml-4' htmlFor='firstName'>First name</label>
                    <input className='h-12 container-glass px-4 focus:border-1 focus:border-white w-full' placeholder='First Name' name='firstName' type='text' id='firstName' required onChange={handleChange}>
                    </input>
                </div>
                <div className='flex flex-col items-start w-full h-full'>
                    <label className='ml-4' htmlFor='lastName'>Last name</label>
                    <input className='w-full h-12 container-glass px-4 focus:border-1 focus:border-white' placeholder='Last name' name='lastName' type='text' id='lastName' required onChange={handleChange}>
                    </input>
                </div>
            </div>
            <div className='w-full px-4 text-xl'>
                <label className='ml-4' htmlFor='email'>Email</label>
                <input className='w-full h-12 container-glass px-4 focus:border-1 focus:border-white' placeholder='Email' name='email' type='email' id='email' required onChange={handleChange} autoComplete='true'>
                </input>
            </div>
            <div className='w-full px-4 text-xl'>
                <label className='ml-4' htmlFor='message'>Message</label>
                <textarea className='w-full h-48 container-glass px-4 pt-1 focus:border-1 focus:border-white resize-y' placeholder='Message' name='message' id='message' required onChange={handleChange}>
                </textarea>
            </div>
            <div className='min-h-18'>
                <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? 'not-a-real-key'} onChange={handleCaptchaChange} />
            </div>
            <button className='w-[50%] h-12 container-glass px-4 focus:border-1 focus:border-white hover:border-1 hover:border-white hover:text-gray-800' type='button' onClick={handleSubmit}>Send</button>
        </form>
    )
}