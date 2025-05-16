import { useEffect } from "react"
import SocialMediaBtn from "./social_media_btn"
import BuilkMailVideo from "../assets/project_image/bulk-mail-application.mp4"
import WeatherAppVideo from "../assets/project_image/Weather_React_Application.mp4"
import ToDoListVideo from "../assets/project_image/ToDoListApp.mp4"
import ReactLoginAppVideo from "../assets/project_image/login_page_react_application.mp4"
import NumberGussingVideo from "../assets/project_image/Number-Gussing_Game.mp4"
import PerfumyReactAppVideo from "../assets/project_image/Perfumy_React_Project.mp4"
import LoveTailVideo from "../assets/project_image/LoveTail-Tailwind-Project.mp4"
import TripAdvisorVideo from "../assets/project_image/tripadvicer.mp4"
export default function Project({ setActiveBtn }) {
    useEffect(
        () => {
            setActiveBtn("Project")
        }, [setActiveBtn]
    )

    const projectData = [
        {
            projectName:"BULK MAIL APP",
            description:"The Bulk Mail React Application is a powerful web-based email marketing tool designed for sending personalized emails to large groups of recipients efficiently. Built using React, the app provides a modern UI and seamless user experience for managing campaigns, contact lists, and mail templates",
            githubLink:"https://github.com/Jovinroshandev/BulkMail-Frontend",
            demoLink:"https://bulk-mail-frontend-beta.vercel.app/",
            Video:BuilkMailVideo
        },
        {
            projectName:"WEATHER APP",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://weather-app-theta-sooty.vercel.app/",
            Video:WeatherAppVideo
        },
        {
            projectName:"TODO List React APP",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:ToDoListVideo
        },
        {
            projectName:"React Login APP",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:ReactLoginAppVideo
        },
        {
            projectName:"Redom Number Guss Game",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:NumberGussingVideo
        },
        {
            projectName:"Perfume Shop Website",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:PerfumyReactAppVideo
        },
        {
            projectName:"Dog Shop Website",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:LoveTailVideo
        },
        {
            projectName:"Trip Advisor Website",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/WeatherApp",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:TripAdvisorVideo
        },
    ]

    const ProjectCard = (props) => {
        const {projectName,description,githubLink,demoLink,Video} = props
        return (
            <div className="bg-gray-100 border w-fit h-96 p-2 rounded-2xl md:flex md:flex-col md:justify-between">
                <h1 className="text-center text-lg my-1 font-medium text-red-500">{projectName}</h1>
                <video className="w-60 h-fit rounded-lg" src={Video} autoPlay muted></video>
                <p className="text-wrap w-60 text-xs text-justify">{description}</p>
                <div className="mt-5 flex justify-around">
                    <a href={demoLink} target="_blank" className="bg-red-500 rounded-full px-5 py-1 text-white font-bold"><i class="fa-solid fa-globe"></i> Demo</a>
                    <a href={githubLink} target="_blank" className="bg-black rounded-full px-5 py-1 text-white font-bold"><i class="fa-brands fa-github"/> GitHub</a>
                </div>
            </div>
        )
    }
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Project</h1>
            <div className="mt-5 flex flex-col md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-8 gap-6 items-center">
                {projectData.map((data)=>(
                    <ProjectCard 
                    projectName={data.projectName} 
                    description={data.description}
                    githubLink={data.githubLink}
                    demoLink={data.demoLink}
                    Video={data.Video}/>
                ))}
            </div>
            {/* Link btn */}
            <div className="md:hidden flex gap-5 mt-4 mb-1">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i className="fa-brands fa-github"></i>} />
            </div>
        </div>
    )
}