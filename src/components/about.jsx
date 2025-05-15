import SocialMediaBtn from "./social_media_btn"
import { useEffect } from "react"
import GradientText from "../GradiText"

export default function About({ setActiveBtn }) {
    // Check Active Btn for Navbar
    useEffect(
        () => {
            setActiveBtn("About")
        }, [setActiveBtn]
    )
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-4 px-4 py-6 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-medium text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">About</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
                <div className="mt-4 md:mt-2">
                    {/* About me */}
                    <div>
                        <h1 className="text-yellow-400 md:text-xl md:font-bold font-medium">About Me</h1>
                        <h1 className="text-white md:text-lg text-xs text-justify">Hi! I'm a passionate <span className="font-semibold">MERN Stack Developer</span> with a strong focus on building fast, scalable, and user-friendly web applications. I specialize in React.js, Express.js, MongoDB, and Node.js, and enjoy turning ideas into real-world applications with clean code and modern UI design.</h1>
                    </div>
                    {/* Skill */}
                    <div className="mt-4 md:mt-3">
                        <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                            Skill
                        </h1>
                        <div className="flex flex-wrap gap-x-1 gap-y-2 text-sm">
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i className="fa-brands fa-react"/> <span className="text-white">REACT</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-node"/> <span className="text-white">Node JS</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-html5"/> <span className="text-white">HTML</span></GradientText>
                            
                            
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-css3-alt"/> <span className="text-white">CSS</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-js"/> <span className="text-white">JAVASCRIPT</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><span className="font-light">ES</span> <span className="text-white">EXPRESS JS</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-envira"/> <span className="text-white">MongoDB</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-python"/> <span className="text-white">PYTHON</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-git"/> <span className="text-white">GIT</span></GradientText>
                            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                    animationSpeed={3}
                                                    showBorder={true}
                                                    className="custom-className text-white px-10 py-1 rounded-full"><i class="fa-brands fa-github"/> <span className="text-white">GitHub</span></GradientText>
                        </div>
                    </div>
                    {/* Experience */}
                    <div className="mt-4 md:mt-3">
                        <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                            Professional Experience
                        </h1>
                        <p className="text-white text-xs md:text-lg text-justify">
                            <span className="font-semibold">Python Developer</span> at Sterling Software Pvt Ltd, Chennai
                        </p>
                        <p className="text-white text-xs md:text-lg text-justify">
                            <span className="font-semibold">Duration:</span> Sep 2023 – Dec 2024 &nbsp;|&nbsp; <span className="font-semibold">Experience:</span> 1.4 Years
                        </p>
                    </div>
                    {/* Education Qualification */}
                    <div className="mt-4 md:mt-3">
                        <h1 className="text-yellow-400 font-medium md:font-bold text-base md:text-xl">
                            Education Qualification
                        </h1>
                        <p className="text-white text-xs md:text-lg text-justify">
                            B.com Computer Application (2016 - 2019)
                        </p>
                        <p className="text-white text-xs md:text-lg text-justify">
                            Aditanar College of Arts and Science, Tiruchendur
                        </p>
                    </div>
                </div>
            </div>
            {/* Link btn */}
            <div className="md:hidden flex gap-5 mt-3">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
            </div>
        </div>
    )
}