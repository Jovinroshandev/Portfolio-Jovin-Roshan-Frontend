import SocialMediaBtn from "./social_media_btn"
import { useEffect } from "react"
import GradientText from "../GradiText"
import GlowText from "./glowtext"
import Certificate1 from "../assets/certificate/Fundamentals_of_Web_Development_Program_Feb_8_2025.pdf"
import Certificate1_Image from "../assets/certificate/Certificate1_image.png"
import {motion} from "framer-motion"


export default function About({ setActiveBtn }) {
    // Check Active Btn for Navbar
    useEffect(
        () => {
            setActiveBtn("About")
        }, [setActiveBtn]
    )

    const skillList = [
        {
            name: "React",
            icon: "fa-brands fa-react"
        },
        {
            name: "Node JS",
            icon: "fa-brands fa-node"
        },
        {
            name: "HTML",
            icon: "fa-brands fa-html5"
        },
        {
            name: "CSS",
            icon: "fa-brands fa-css3-alt"
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },
        {
            name: "Tailwind CSS",
            icon: "fa-brands fa-web-awesome"
        },
        {
            name: "Express JS",
            icon: "fa-solid fa-server"
        },
        {
            name: "MongoDB",
            icon: "fa-solid fa-database"
        },
        {
            name: "Python",
            icon: "fa-brands fa-python"
        },
        {
            name: "Firebase",
            icon: "fa-solid fa-fire"
        },
        {
            name: "Git",
            icon: "fa-brands fa-git"
        },
        {
            name: "GitHub",
            icon: "fa-brands fa-github"
        },

    ]

    // Component for Skill btn (Purpose for Reuse)
    const SkillBtn = (props) => {
        return (
            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={true} className="custom-className text-white px-3 py-1 rounded-full">
                <i className={props.icon} /><span className="text-white"> {props.btnValue}</span>
            </GradientText>
        )
    }

    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-0 md:pt-5 md:pb-4">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">About</h1>
            <motion.div
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{
                type:"spring",
                damping:5,
                stiffness:300
            }}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
                <div className="mt-4 md:mt-2">
                    {/* About me */}
                    <div>
                        <h1 className="text-yellow-400 md:text-xl md:font-bold font-medium">About Me</h1>
                        <h1 className="text-white md:text-sm text-xs text-justify">Hi! I'm a passionate <span className="font-semibold"><GlowText>MERN Stack Developer</GlowText></span> with a strong focus on building fast, scalable, and user-friendly web applications. I specialize in React.js, Express.js, MongoDB, and Node.js, and enjoy turning ideas into real-world applications with clean code and modern UI design.</h1>
                    </div>
                    {/* Skill */}
                    <div className="mt-2 md:mt-3">
                        <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                            Skill
                        </h1>
                        <div className="flex md:flex-col text-xs md:text-sm md:mt-1">
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-2">
                                {skillList.map((item, index) => <SkillBtn key={index} btnValue={item.name} icon={item.icon} />)}
                            </div>
                        </div>
                    </div>
                    {/* Experience */}
                    <div className="flex flex-col md:flex-row md:gap-10">
                        <div className="mt-2 md:mt-3">
                            <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                                Professional Experience
                            </h1>
                            <p className="text-white text-xs md:text-sm text-justify">
                                <span className="font-semibold">Python Developer</span> at Sterling Software Pvt Ltd, Chennai
                            </p>
                            <p className="text-white text-xs md:text-sm text-justify">
                                <span className="font-semibold">Duration:</span> Sep 2023 – Dec 2024 &nbsp;|&nbsp; <span className="font-semibold">Experience:</span> 1.4 Years
                            </p>
                        </div>
                        {/* Education Qualification */}
                        <div className="mt-2 md:mt-3">
                            <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                                Education Qualification
                            </h1>
                            <p className="text-white text-xs md:text-sm text-justify">
                                B.com Computer Application (2016 - 2019)
                            </p>
                            <p className="text-white text-xs md:text-sm text-justify">
                                Aditanar College of Arts and Science, Tiruchendur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Certificate */}
            <div>
                <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl mt-2">
                    Certificate
                </h1>
                <p className="text-white text-xs mb-1 w-48">Fundamentals of Web Development Program - Feb 8, 2025</p>
                <div className="glow-border w-fit p-[2px] rounded-xl">
                    <a href={Certificate1} target="_blank" rel="noopener noreferrer">
                        <img className="rounded-lg w-36 block" src={Certificate1_Image} alt="certificate_img"/>
                    </a>
                </div>
            </div>
            {/* Link btn */}
            <div className="md:hidden flex gap-5 mt-4 mb-2">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i className="fa-brands fa-github"></i>} />
            </div>
            </motion.div>
        </div>
    )
}