import { useEffect } from "react"
import SocialMediaBtn from "./social_media_btn"
import BuilkMailVideo from "../assets/project_image/bulk-mail-application.mp4"
import QuizAppImage from "../assets/project_image/QuizApp.mp4"
import WeatherAppVideo from "../assets/project_image/Weather_React_Application.mp4"
import ToDoListVideo from "../assets/project_image/ToDoListApp.mp4"
import ReactLoginAppVideo from "../assets/project_image/login_page_react_application.mp4"
import NumberGussingVideo from "../assets/project_image/Number-Gussing_Game.mp4"
import PerfumyReactAppVideo from "../assets/project_image/Perfumy_React_Project.mp4"
import LoveTailVideo from "../assets/project_image/LoveTail-Tailwind-Project.mp4"
import TripAdvisorVideo from "../assets/project_image/tripadvicer.mp4"
import UdemyCloneVideo from "../assets/project_image/UdemyCloneWebsite.mp4"
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
            projectName:"TODO Task Manager",
            description:"A simple and responsive to-do list app to manage daily tasks. Built with React, Tailwind CSS, JavaScript, and CSS, it lets users easily add, edit, and delete tasks. The clean design and user-friendly interface make task management quick and efficient.",
            githubLink:"https://github.com/Jovinroshandev/taskManager",
            demoLink:"https://task-manager-brown-theta.vercel.app/",
            Video:ToDoListVideo
        },
        {
            projectName:"Quiz App",
            description:"An interactive quiz application built with React, Tailwind CSS, JavaScript, and CSS. Quizee lets users test their knowledge with multiple-choice questions. It features a clean UI, instant feedback on answers, and smooth navigation between questions. Fully responsive and easy to use on any device",
            githubLink:"https://github.com/Jovinroshandev/QuizeeApp",
            demoLink:"https://quizee-app-seven.vercel.app/",
            Video:QuizAppImage
        },
        {
            projectName:"React Login APP",
            description:"A modern and responsive weather application built with React.js, designed to provide real-time weather updates based on the user's current location or manual city search. The app fetches accurate weather data including temperature, weather conditions, humidity, and wind speed using a third-party weather API.",
            githubLink:"https://github.com/Jovinroshandev/loginapp_frontend",
            demoLink:"https://loginapp-frontend-ruddy.vercel.app/",
            Video:ReactLoginAppVideo
        },
        {
            projectName:"Redom Number Guss Game",
            description:"A fun and interactive number guessing game built with HTML, CSS, and JavaScript. The app generates a random number, and the user tries to guess it with feedback provided after each attempt. It’s a simple game that improves logical thinking and adds a playful touch to the portfolio. Fully responsive and easy to play on any device.",
            githubLink:"https://github.com/Jovinroshandev/Game-FindNumber",
            demoLink:"https://game-find-number-orpin.vercel.app/",
            Video:NumberGussingVideo
        },
        {
            projectName:"Perfume Shop Website",
            description:"A stylish and responsive perfume store website built with React, Tailwind CSS, JavaScript, and CSS. Perfumy features a modern layout showcasing perfume products with smooth scrolling, clean visuals, and a user-friendly interface. Ideal for showcasing e-commerce design skills with a focus on aesthetics and responsiveness.",
            githubLink:"https://github.com/Jovinroshandev/Perfumy-React",
            demoLink:"https://perfumy-react-application.vercel.app/",
            Video:PerfumyReactAppVideo
        },
        {
            projectName:"Dog Shop Website",
            description:"A clean and responsive dog shop website built with HTML, CSS, and JavaScript. Love Tails showcases dog products with a modern design, smooth layout, and user-friendly experience. Perfect for displaying frontend development and UI design skills, especially for pet-related e-commerce websites.",
            githubLink:"https://github.com/Jovinroshandev/Love_Tails-Greenden",
            demoLink:"https://love-tails-greenden.vercel.app/",
            Video:LoveTailVideo
        },
        {
            projectName:"Trip Advisor Website",
            description:"A responsive clone of TripAdvisor built with HTML, CSS, and JavaScript. This project features a clean layout showcasing destinations, hotels, and restaurants, along with review and rating sections. It highlights frontend development skills with a focus on layout design, content organization, and mobile-friendly responsiveness.",
            githubLink:"https://github.com/Jovinroshandev/Trip-Advisor",
            demoLink:"https://trip-advisor-rust.vercel.app/",
            Video:TripAdvisorVideo
        },
        {
            projectName:"Udemy Clone Website",
            description:"A fully responsive online learning platform built with React, replicating the core features of Udemy. It showcases course listings, categories, and a modern UI with intuitive navigation. Designed to provide a seamless user experience across all devices",
            githubLink:"https://github.com/Jovinroshandev/Udemy-Clone-React",
            demoLink:"https://udemy-clone-react-uhup.vercel.app/",
            Video:UdemyCloneVideo
        },
    ]

    const ProjectCard = (props) => {
        const {projectName,description,githubLink,demoLink,Video} = props
        return (
            <div className="bg-gray-100 border w-fit h-96 p-2 rounded-2xl flex flex-col justify-between">
                <h1 className="text-center text-lg my-1 font-medium text-red-500">{projectName}</h1>
                <video className="w-60 h-fit rounded-lg" src={Video} autoPlay muted></video>
                <p className="text-wrap w-60 text-xs text-justify">{description}</p>
                <div className="mt-5 flex justify-around">
                    <a href={demoLink} target="_blank" className="bg-red-500 rounded-full px-5 py-1 text-white font-bold text-xs md:text-sm"><i class="fa-solid fa-globe"></i> Live Demo</a>
                    <a href={githubLink} target="_blank" className="bg-black rounded-full px-5 py-1 text-white font-bold text-xs md:text-sm"><i class="fa-brands fa-github"/> GitHub</a>
                </div>
            </div>
        )
    }
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Project</h1>
            <div className="mt-5 flex flex-col md:flex-row md:flex-wrap md:gap-x-9 md:gap-y-8 gap-6 items-center">
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