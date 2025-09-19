import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="space-y-10 text-center pt-30 px-16">
        <h1 className="text-blue-50 text-5xl font-bold">Everything you are. In one space, simple link in bio.</h1>
        <h2 className="text-2xl text-white font-medium max-w-2/3 justify-self-center">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</h2>
      </div>
      <div className="justify-self-center flex space-x-4 mt-12">
        <input type="text" placeholder="lynkspace.ee/yourname" className="bg-white py-2 px-4 focus:outline-none focus:border-2 focus:border-violet-600"></input>
        <button className="bg-violet-600 text-white py-2 px-4 font-semibold rounded-4xl">Claim your Space</button>
      </div>
    </>
  );
}
