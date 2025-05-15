import { useEffect } from "react"
import SocialMediaBtn from "./social_media_btn"

export default function Project({setActiveBtn}) {
    useEffect (
        ()=>{
            setActiveBtn("Project")
        },[setActiveBtn]
    )
    return(
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-4 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Project</h1>
            
            {/* Link btn */}
            <div className="md:hidden flex gap-5 mt-4 mb-1">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i class="fa-brands fa-github"></i>} />
            </div>
        </div>
    )
}