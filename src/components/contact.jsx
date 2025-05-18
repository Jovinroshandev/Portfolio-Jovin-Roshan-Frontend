import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import SocialMediaBtn from "./social_media_btn"
import GlowText from "./glowtext"
import Resume from "../assets/resume/Jovin_Roshan_Marn_Stack_Developer_Updated.pdf"
import GradientText from "../GradiText"

export default function Contact({ setActiveBtn }) {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [submitActive, setActiveSubmit] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [loading, setLoading] = useState(false);
    const [sendMsgStatus, setSendMsgStatus] = useState(false)
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    useEffect(() => {
        if (email.length >= 1) {
            if (isValidEmail(email)) {
                setEmailAlert(false)
            }
            else {
                setEmailAlert(true)
            }
        }
    }, [email])

    // message send successfull status
    useEffect(() => {
        if (sendMsgStatus) {
            const timer = setTimeout(() => setSendMsgStatus(false), 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [sendMsgStatus]);


    useEffect(() => {

        if (name.trim() && isValidEmail(email.trim()) && msg.trim()) {
            setActiveSubmit(true)
        } else {
            setActiveSubmit(false)
        }
    }, [name, email, msg])

    useEffect(
        () => {
            setActiveBtn("Contact")
        }, [setActiveBtn]
    )
    const handleName = (e) => setName(e.target.value)
    const handlePhoneNumber = (e) => setPhoneNumber(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)

    const handleMsg = (e) => setMsg(e.target.value)
    const CONTACT_API__URI = process.env.REACT_APP_CONTACT_URI
    const handleSend = async () => {
        try {
            setLoading(true);
            await axios.post(CONTACT_API__URI, {
                name: name.trim(),
                phoneNumber: phoneNumber.trim(),
                email: email.trim(),
                msg: msg.trim()
            });

            console.log("Successfully Sent");
            setSendMsgStatus(true); // ✅ this is the correct setter function
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMsg("");
        } catch (error) {
            console.error("Error sending message:", error);
            console.log("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div style={{ fontFamily: '"Roboto", sans-serif' }} className="relative border-[3px] border-yellow-500 mx-3 md:mx-40 my-2 md:my-3 px-4 py-5 bg-slate-900 rounded-3xl md:px-10 md:py-5">
            <h1 style={{ fontFamily: '"Delius", cursive' }} className="font-bold text-xs md:text-lg absolute top-[-10px] md:top-[-20px] bg-yellow-500 border-[2px] border-white px-2 py-1 rounded-full">Contact</h1>

            {/* Contact Form */}
            {sendMsgStatus && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 3,
                    }}
                    className="flex justify-center"
                >
                    <h1 className="bg-green-300 w-fit px-6 md:px-32 py-3 rounded-xl text-green-900 text-center text-sm md:text-base shadow-lg shadow-green-400/50">
                        ✅ Message Sent Successfully!
                    </h1>
                </motion.div>
            )}


            <div className="flex flex-col">
                <div className="flex justify-center mt-3">
                    <motion.div className="bg-gray-800 rounded-xl p-8 text-white flex flex-col gap-10 w-96"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            damping: 5,
                            stiffness: 300
                        }}>
                        <div>
                            <h2 className="text-yellow-300 font-medium md:font-bold md:text-lg ">Get in touch</h2>
                            <p className="text-xs text-gray-300">simply fill out the contact form below, and I’ll get back to you as soon as possible!</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-300">Name *</p>
                            <input onChange={handleName} value={name} className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" required />
                        </div>
                        <div>
                            <p className="text-xs text-gray-300">Phone Number (Optional)</p>
                            <input onChange={handlePhoneNumber} value={phoneNumber} className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" type="text" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-300">Email Address *</p>
                            <input
                                onChange={handleEmail}
                                onBlur={() => setEmailAlert(!isValidEmail(email))}
                                value={email}
                                className="bg-transparent w-full border-b-2 border-yellow-400 outline-none"
                                type="email"
                                required
                            />
                            {emailAlert && (
                                <p className="text-xs text-red-400 pt-1">
                                    Invalid Email Address. Please Try Again!
                                </p>
                            )}

                        </div>
                        <div>
                            <p className="text-xs text-gray-300">Message *</p>
                            <textarea onChange={handleMsg} value={msg} className="bg-transparent w-[100%] border-b-2 border-yellow-400 outline-none" required />
                        </div>
                        <div className="flex justify-center">
                            <button
                                disabled={!submitActive || loading}
                                onClick={submitActive && !loading ? handleSend : undefined}
                                className={`text-xs rounded-xl font-medium px-8 py-1 ${submitActive && !loading
                                    ? "bg-yellow-400 text-black"
                                    : "bg-yellow-100 text-black cursor-not-allowed"
                                    }`}>
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>


            {/* Link btn */}
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <GradientText colors={["#5DE2E7", "#E2EAF4", "#5DE2E7", "#E2EAF4", "#5DE2E7"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="custom-className px-4">
                    <a href={Resume} download="JOVIN_ROSHAN_MERN_STACK_REACT_DEVELOPER_RESUME" className=" text-xs">Download Resume</a>
                </GradientText>
                <GlowText><p className="text-xs  rounded-full p-1"><i className="fa-solid fa-envelope-circle-check text-sm"></i> jovin.roshan.dev@gmail.com</p></GlowText>
                <GlowText><p className="text-xs  rounded-full p-1"><i className="fa-solid fa-phone-volume"></i> +918925164487</p></GlowText>
            </div>
            <div className="flex gap-2 mt-4 mb-1 justify-center items-center">
                <SocialMediaBtn link="https://www.linkedin.com/in/jovin-roshan-marn-stack-developer" btnStyle={<i className="fa-brands text-xl font-bold fa-linkedin-in" />} />
                <SocialMediaBtn link="https://www.fiverr.com/jovin_roshan_j" btnStyle="fiverr" />
                <SocialMediaBtn link="https://github.com/Jovinroshandev" btnStyle={<i className="fa-brands fa-github"></i>} />
            </div>
        </div>
    )
}