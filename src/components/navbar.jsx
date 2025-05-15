import { useState, useEffect, useRef } from "react";
import ShinyText from "../ShinyText";
import { useNavigate } from "react-router-dom";

const MenuBtn = (props) => {
    const inActivebtnStyle = "bg-yellow-300 p-2 hover:bg-white rounded-3xl"
    const ActivebtnStyle = "bg-white cursor-default p-2 hover:bg-black hover:text-white rounded-3xl"
    const {onClick,icon,manageativeBtn,btn} = props
    return (
        <button  onClick={onClick} className={manageativeBtn==btn?ActivebtnStyle:inActivebtnStyle}>
            <i className={icon} />{props.btn}
        </button>
    )
}

export default function Navbar({ activeBtn }) {
    const [manageativeBtn, setActive] = useState("")
    useEffect(
        () => {
            setActive(activeBtn)
        }, [activeBtn]
    )
    const [sideNav, setSideNav] = useState(false);
    const sideNavRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
                setSideNav(false);
            }
        }

        if (sideNav) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sideNav]);
    const navigate = useNavigate()
    const handleHome = () => { navigate("/") }
    const handleAbout = () => { navigate("/about") }
    const handleProject = () => { navigate("/project") }
    const handleContact = () => { navigate("/contact") }
    return (
        <div>
            <div className="bg-slate-900 cur border-[6px] border-yellow-500 text-white flex justify-between items-center rounded-full px-3 py-2  mx-2  md:mx-40">
                <div className="flex flex-col md:px-5">
                    <ShinyText text="PORTFOLIO" disabled={false} speed={3} className='custom-class font-bold md:text-xl' />
                </div>
                <div className="md:hidden">
                    <i
                        onClick={() => setSideNav(true)}
                        className="fa-solid fa-bars text-xl cursor-pointer"
                    ></i>
                </div>
                <div className="hidden text-black text-sm md:flex gap-10 px-5 font-medium">
                    <MenuBtn manageativeBtn={manageativeBtn} onClick={handleHome} btn="Home" icon="fa-solid fa-house mr-2" />
                    <MenuBtn manageativeBtn={manageativeBtn} onClick={handleAbout} btn="About" icon="fa-regular fa-address-card mr-2" />
                    <MenuBtn manageativeBtn={manageativeBtn} onClick={handleProject} btn="Project" icon="fa-solid fa-briefcase mr-2" />
                    <MenuBtn manageativeBtn={manageativeBtn} onClick={handleContact} btn="Contact" icon="fa-solid fa-envelope mr-2" />
                </div>
            </div>

            {/* Side Navbar with outside click support */}
            {sideNav && (
                <div
                    ref={sideNavRef}
                    className="bg-yellow-400 absolute right-0 top-0 h-screen px-10 shadow-xl z-50"
                >
                    <div className="absolute top-1 right-2 py-4">
                        <i
                            onClick={() => setSideNav(false)}
                            className="cursor-pointer text-xl fa-solid fa-circle-xmark"
                        ></i>
                    </div>
                    <div className="text-sm flex flex-col gap-8 py-12">
                        <MenuBtn manageativeBtn={manageativeBtn} onClick={handleHome} btn="Home" icon="fa-solid fa-house mr-2" />
                        <MenuBtn manageativeBtn={manageativeBtn} onClick={handleAbout} btn="About" icon="fa-regular fa-address-card mr-2" />
                        <MenuBtn manageativeBtn={manageativeBtn} onClick={handleProject} btn="Project" icon="fa-solid fa-briefcase mr-2" />
                        <MenuBtn manageativeBtn={manageativeBtn} onClick={handleContact} btn="Contact" icon="fa-solid fa-envelope mr-2" />
                    </div>
                </div>
            )}
        </div>
    );
}
