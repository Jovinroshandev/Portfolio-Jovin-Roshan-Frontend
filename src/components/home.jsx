import HeadshotImage from "../assets/images/mypiclogo.png"
import GradientText from "../GradiText"
import Resume from "../assets/resume/Jovin_Roshan_Marn_Stack_Developer_Updated.pdf"
import SocialMediaBtn from "./social_media_btn"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
const LinkBtn = () => {
    const datas = [
        {
            value: "Chennai",
            icon: "fa-solid fa-location-dot pr-2"
        },
        {
            value: "jovin.roshan.dev@gmail.com",
            icon: "fa-solid fa-at pr-2"
        },
        {
            value: "+91 8925164487",
            icon: "fa-solid fa-phone-volume pr-2"
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                damping: 5,
                stiffness: 300
            }}
            className="text-xs flex  flex-col gap-y-2 items-center">
            {datas.map((data, index) => (<p key={index} className="border-[2px] w-fit px-5  text-yellow-200 border-yellow-400 p-1 rounded-full"><i className={data.icon} /> {data.value}</p>))}
        </motion.div>
    )
}

export default function Home({ setActiveBtn }) {
    useEffect(
        () => {
            setActiveBtn("Home")
        }, [setActiveBtn]
    )

    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 p-4 bg-slate-900 rounded-3xl md:px-10 md:py-10">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Welcome to My Portfolio</h1>
            <div className="flex flex-col md:flex-row justify-between mt-2 md:mt-4 items-center gap-2 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5
                    }}>
                    <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-className"><p className="text-4xl">Jovin Roshan</p></GradientText>
                    <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-white  text-lg md:text-lg font-light">
                        <Typewriter options={{
                            strings:["MERN STACK DEVELOPER","REACT DEVELOPER","PYTHON DEVELOPER"],
                            autoStart:true,
                            deleteSpeed:5,
                            loop:true
                        }}/>
                    </div>
                    <p className="hidden md:block text-white text-lg pt-5">I specialize in building full-stack web applications with React, MongoDB, and Node.js, with a focus on clean code, performance, and user experience.
                        Currently open to opportunities as a React Developer or MERN Stack Developer.</p>
                    <div className="hidden md:flex text-sm  gap-5 mt-5 mb-10">
                        <p className="border-[2px] text-yellow-200 border-yellow-400 p-1 rounded-full"><i className="fa-solid fa-location-dot" /> Chennai</p>
                        <p className="border-[2px] text-yellow-200 border-yellow-400 p-1 rounded-full"><i className="fa-solid fa-envelope"></i> jovin.roshan.dev@gmail.com</p>
                        <p className="border-[2px] text-yellow-200 border-yellow-400 p-1 rounded-full"><i className="fa-solid fa-phone-volume"></i> +91 8925164487</p>
                    </div>
                    <div className="mt-5 font-medium hidden md:flex md:gap-10">
                        <a href={Resume} target="_blank" className="border-[2px] hover:bg-gray-900 hover:text-white hover:border-white bg-gray-200  text-black px-8 py-2  rounded-full">View Resume</a>
                        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={true}
                            className="custom-className"><a href={Resume} target="_blank" download className="text-white px-3 py-2 rounded-full">Download Resume</a></GradientText>
                    </div>
                </motion.div>

                <img className="w-44 h-48 md:w-72 md:h-64 rounded-full" src={HeadshotImage} alt="headshotpic" />

            </div>
            <p className="md:hidden text-white text-xs py-3 text-justify">I specialize in building full-stack web applications with React, MongoDB, and Node.js, with a focus on clean code, performance, and user experience.
                Currently open to opportunities as a React Developer or MERN Stack Developer.</p>
            <div className="md:hidden">
                <LinkBtn />
            </div>
            <div className="flex justify-between items-center mt-4">
                {/* Download Btn */}
                <a href={Resume} target="_blank" className="md:hidden bg-gray-200 text-sm px-3 py-2 font-medium rounded-full">Download Resume</a>
                {/* Link */}
                <div className="flex gap-5">
                    <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                    <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                    <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i className="fa-brands fa-github"></i>} />
                </div>
            </div>

        </div>
    )
}