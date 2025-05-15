import { useEffect } from "react"

export default function Project({setActiveBtn}) {
    useEffect (
        ()=>{
            setActiveBtn("Project")
        },[setActiveBtn]
    )
    return(
        <div></div>
    )
}