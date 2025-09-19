"use client"
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Generate() {
    const [links, setLinks] = useState([]);
    const [form, setForm] = useState({
        username: "",
        link_text: "",
        link: "",
        piclink: "",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const addLinks = async () => {
        await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        /*fetch("/api/generate")
            .then(res => res.json())
            .then(data => setLinks(data));*/
    }
    return (
        <div className='justify-between px-20 pt-12 flex'>
            <div className='space-y-8'>
                <h1 className='text-4xl font-semibold text-white'>Create your lYnkSpace</h1>
                <div className='space-y-2'>
                    <h1 className='text-xl text-white font-medium'>Step1:</h1>
                    <h1 className='text-xl text-white font-medium'>Claim your handle</h1>
                    <input type='text' placeholder='Enter your username' className='bg-white px-3 py-2 rounded-4xl' name='username' onChange={handleChange}></input>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl text-white font-medium'>Step2:</h1>
                    <h1 className='text-xl text-white font-medium'>Add your links</h1>
                    <div className='space-x-4'>
                        <input type='text' placeholder='Enter link text' className='bg-white px-3 py-2 rounded-4xl' name='link_text' onChange={handleChange}></input>
                        <input type='text' placeholder='Enter link' className='bg-white px-3 py-2 rounded-4xl' name='link' onChange={handleChange}></input>
                        <button className='bg-violet-600 px-4 py-2 text-white rounded-4xl hover:bg-violet-700 hover:cursor-pointer'>+ Add links</button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl text-white font-medium'>Step3:</h1>
                    <h1 className='text-xl text-white font-medium'>Add your picture and finalize</h1>
                    <div className='space-x-4'>
                        <input type='text' placeholder='Enter link to your picture' className='bg-white px-3 py-2 rounded-4xl' name='piclink' onChange={handleChange}></input>
                        <button className='bg-violet-600 px-4 py-2 text-white rounded-4xl hover:bg-violet-700 hover:cursor-pointer' onClick={addLinks}>Create your LinkSpace</button>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='pr-8'>
                <Image src='/sat.png' alt='' width={500} height={500} className=''></Image>
            </div>
        </div >
    )
}

export default Generate