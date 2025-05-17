import { useEffect } from "react"
import SocialMediaBtn from "./social_media_btn"
import GlowText from "./glowtext"

export default function Contact({ setActiveBtn }) {
    useEffect(
        () => {
            setActiveBtn("Contact")
        }, [setActiveBtn]
    )
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Contact</h1>

            {/* Contact Form */}

            <div className="flex justify-center mt-3">
                <div className="bg-gray-800 rounded-xl p-8 text-white flex flex-col gap-10 w-96">
                    <div>
                        <h2 className="text-yellow-300 font-medium">Get in touch</h2>
                        <p className="text-xs text-gray-300">simply fill out the contact form below, and I’ll get back to you as soon as possible!</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-300">Name</p>
                        <input className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" required />
                    </div>
                    <div>
                        <p className="text-xs text-gray-300">Phone Number</p>
                        <input className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" required />
                    </div>
                    <div>
                        <p className="text-xs text-gray-300">Email Address</p>
                        <input className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" required />
                    </div>
                    <div>
                        <p className="text-xs text-gray-300">Message</p>
                        <textarea className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" required />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-yellow-400 text-xs rounded-xl text-black font-medium px-8 py-1">Send</button>
                    </div>
                </div>

            </div>
           

            {/* Link btn */}
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <GlowText><p className="text-xs border border-yellow-300 rounded-full p-1"><i class="fa-solid fa-envelope-circle-check text-sm"></i> jovin.roshan.dev@gmail.com</p></GlowText>
                <GlowText><p className="text-xs border border-yellow-300 rounded-full p-1"><i class="fa-solid fa-phone-volume"></i> +918925164487</p></GlowText>
            </div>
            <div className="md:hidden flex gap-2 mt-4 mb-1 justify-center items-center">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i class="fa-brands fa-github"></i>} />
            </div>
        </div>
    )
}