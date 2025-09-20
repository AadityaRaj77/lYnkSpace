"use client"
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from "motion/react"

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
                    <h1 className='text-xl text-white font-medium'>Step 1</h1>
                    <h1 className='text-xl text-white font-medium'>Claim your handle</h1>
                    <motion.input
                        type="text"
                        name='username'
                        className='bg-white px-3 py-2 rounded-4xl'
                        placeholder="Enter your username "
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 40 }}
                        onChange={handleChange}
                    />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl text-white font-medium'>Step 2</h1>
                    <h1 className='text-xl text-white font-medium'>Add your links</h1>
                    <div className='space-x-4'>
                        <motion.input
                            type="text"
                            name='link_text'
                            className='bg-white px-3 py-2 rounded-4xl'
                            placeholder="Enter link text"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 40 }}
                            onChange={handleChange}
                        />
                        <motion.input
                            type="text"
                            name='link'
                            className='bg-white px-3 py-2 rounded-4xl'
                            placeholder="Enter link"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 40 }}
                            onChange={handleChange}
                        />
                        <motion.button
                            whileHover={{ scale: 1.050 }}
                            whileTap={{ scale: 0.97 }}
                            onHoverStart={() => console.log('hover started!')}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 40 }}
                            className='bg-violet-600 px-4 py-2 text-white rounded-4xl hover:bg-violet-700 hover:cursor-pointer'
                        >+ Add links</motion.button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-xl text-white font-medium'>Step 3</h1>
                    <h1 className='text-xl text-white font-medium'>Add your picture and finalize</h1>
                    <div className='space-x-4'>
                        <motion.input
                            type="text"
                            name='piclink'
                            className='bg-white px-3 py-2 rounded-4xl'
                            placeholder="Enter picture link"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 40 }}
                            onChange={handleChange}
                        />
                        <motion.button
                            whileHover={{ scale: 1.050 }}
                            whileTap={{ scale: 0.97 }}
                            onHoverStart={() => console.log('hover started!')}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 40 }}
                            className='bg-violet-600 px-4 py-2 text-white rounded-4xl hover:bg-violet-700 hover:cursor-pointer'
                            onClick={addLinks}
                        >Create your LinkSpace</motion.button>
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