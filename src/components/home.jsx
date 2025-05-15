import HeadshotImage from "../assets/images/mypiclogo.png"
import GradientText from "../GradiText"
import Resume from "../assets/resume/Jovin_Roshan_Marn_Stack_Developer_Updated.pdf"
import SocialMediaBtn from "./social_media_btn"
import { useEffect } from "react"

export default function Home({setActiveBtn}) {
    useEffect (
        ()=>{
            setActiveBtn("Home")
        },[setActiveBtn]
    )
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-8 p-4 bg-slate-900 rounded-3xl md:px-20 md:py-16">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-medium text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Welcome to My Portfolio</h1>
            <div className="flex flex-col md:flex-row justify-between mt-10 items-center gap-6 md:gap-16">
                <div>
                    <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-className"><p className="text-4xl">Jovin Roshan</p></GradientText>
                    <h1 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-white  text-lg md:text-lg font-light">MERN STACK DEVELOPER</h1>
                    <p className="hidden md:block text-white text-lg pt-5">I specialize in building full-stack web applications with React, MongoDB, and Node.js, with a focus on clean code, performance, and user experience.
                        Currently open to opportunities as a React Developer or MERN Stack Developer.</p>
                    <div className="mt-5 font-medium hidden md:flex md:gap-10">
                        <a href={Resume} target="_blank" className="border-[2px] hover:bg-gray-900 hover:text-white hover:border-white bg-gray-200  text-black px-8 py-2  rounded-full">View Resume</a>
                        <a href={Resume} target="_blank" download className="border-[2px] text-white hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-full">Download Resume</a>
                    </div>
                </div>

                <img className="w-48 h-48 md:w-56 md:h-56" src={HeadshotImage} alt="headshotpic" />

            </div>
            <div className="text-white text-xs flex justify-between mt-5">
                <p className="border-[2px] text-yellow-200 border-yellow-400 p-1 rounded-full"><span className="font-semibold">Location</span> Chennai</p>
                <p className="border-[2px] text-yellow-200 border-yellow-400 p-1 rounded-full"><span className="font-semibold">Email</span> jovin.roshan.dev@gmail.com</p>
            </div>
            <p className="md:hidden text-white text-xs py-5 text-justify">I specialize in building full-stack web applications with React, MongoDB, and Node.js, with a focus on clean code, performance, and user experience.
                Currently open to opportunities as a React Developer or MERN Stack Developer.</p>
            <div className="flex justify-between items-center mt-5">
                <a href={Resume} target="_blank" className="md:hidden bg-gray-200  px-3 py-2 font-medium rounded-full">Download Resume</a>
                <div className="flex gap-5">
                    <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                    <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                </div>
            </div>
        </div>
    )
}