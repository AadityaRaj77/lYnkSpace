import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <nav className='flex gap-x-8 justify-between text-white items-center px-16 py-6'>
            <div>
                <Image src='/vercel.svg' alt='lYnkSpace' width={50} height={50} className=''></Image>
            </div>
            <div className='space-x-12 flex items-center'>
                <routes className='flex space-x-8'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/tools'>Tools</Link>
                    <Link href='/templates'>Templates</Link>
                </routes>
                <div className='font-semibold bg-purple-600 px-4 py-2 rounded-4xl'><Link href='/login'>Login</Link></div>
            </div>
        </nav>
    )
}

export default Navbar