"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react"




export default function Home() {
  const router = useRouter();
  const generateSpace = () => {
    router.push("/generate");
  }
  return (
    <>
      <div>
        <div className="space-y-10 text-center pt-30 px-8 sm:px-16">
          <h1 className="text-blue-50 text-5xl font-bold">Everything you are. In one space, simple link in bio.</h1>
          <h2 className="text-2xl text-white font-medium sm:max-w-2/3 justify-self-center">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</h2>
        </div>
        <div className="justify-self-center flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-12">
          <motion.input
            type="text"
            className="bg-white py-2 px-4 focus:outline-none focus:border-2 focus:border-violet-600 "
            placeholder="lynkspace.ee/yourname"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 40 }}
          />
          <motion.button
            whileHover={{ scale: 1.050 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => console.log('hover started!')}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 40 }}
            className='bg-violet-600 px-4 py-2 text-white rounded-4xl hover:bg-violet-700 hover:cursor-pointer' onClick={generateSpace}
          >Claim your space</motion.button>
        </div>
      </div>
    </>
  );
}
