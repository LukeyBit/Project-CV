'use client';
import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', message: ''});

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        console.log(formData);
        const response = await axios.post('http://localhost:5000/message', formData);
        console.log(response);
    }
    return (
        <main className='flex min-h-screen flex-col items-center justify-between lg:p-16 py-8'>
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
                    <input className='w-full h-12 container-glass px-4 focus:border-1 focus:border-white' placeholder='Email' name='email' type='email' id='email' required onChange={handleChange}>
                    </input>
                </div>
                <div className='w-full px-4 text-xl'>
                    <label className='ml-4' htmlFor='message'>Message</label>
                    <textarea className='w-full h-48 container-glass px-4 pt-1 focus:border-1 focus:border-white resize-y' placeholder='Message' name='message' id='message' required onChange={handleChange}>
                    </textarea>
                </div>
                <button className='w-[50%] h-12 container-glass px-4 focus:border-1 focus:border-white hover:border-1 hover:border-white hover:text-gray-800' type='button' onClick={handleSubmit}>Send</button>
            </form>
        </main>
    );
}