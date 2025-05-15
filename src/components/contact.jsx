import { useEffect } from "react"
export default function Contact({setActiveBtn}) {
    useEffect (
        ()=>{
            setActiveBtn("Contact")
        },[setActiveBtn]
    )
    return(
        <div></div>
    )
}