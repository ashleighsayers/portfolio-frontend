import seek from "../img/seek.svg"
import linkedin from "../img/linkedin.svg"
import resume from "../img/resume.svg"
import { useState } from "react"



export default function Nav(){
    const [showNav, setShowNav] = useState(false);

    const nav = (e) => {
        setShowNav(!showNav)
    }

    return(
        <div className="min-w-full ">
            <button onClick={nav} className=" container sm:flex md:hidden fixed flex-col gap-1 right-1 justify-center items-end h-min w-min top-3">
                <div className="bg-pink-500  w-5 h-1"></div>
                <div className="bg-pink-500  w-5 h-1"></div>
                <div className="bg-pink-500  w-5 h-1"></div>
            </button>

        {showNav && (
            <div className="h-full  container flex flex-col justify-between items-center py-5 w-32 bg-gray-900  right-0 fixed  top-0">
            
            <div className="w-full container flex  ">
            <button onClick={nav} className=" container flex fixed flex-col gap-1 justify-center px-10 h-10">
                <div className="bg-white  w-10 h-1"></div>
                <div className="bg-white  w-10 h-1"></div>
                <div className="bg-white  w-10 h-1"></div>
            </button>
            </div>

            <div className="container flex flex-col gap-5 items-center">
            <a rel="noreferrer" href="https://1drv.ms/b/s!AsK-Dd9CRgUnneNkK35Jf0VIwt-aDw?e=j2TLot" download="Ashleigh Sayers Resume" target="_blank"  className="w-12 h-12 "><img src={resume}/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/ashleigh-sayers" target="_blank"  className="w-10 h-10 "><img src={linkedin}/></a>
            <a rel="noreferrer" href="https://www.seek.com.au/profile/ashleigh-sayers-7P2qZdrt3S" target="_blank" className="w-10 h-10"><img src={seek} /></a>
            </div>

            
        </div>
        )}

        <div className="h-full  container md:flex sm:hidden flex-col justify-end items-center p-5 w-32 bg-gray-900  right-0 fixed  top-0">
            

            <div className="container flex flex-col gap-5 items-center">
            <a rel="noreferrer" href="https://1drv.ms/b/s!AsK-Dd9CRgUnneNkK35Jf0VIwt-aDw?e=j2TLot" download="Ashleigh Sayers Resume" target="_blank"  className="w-12 h-12 "><img src={resume}/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/ashleigh-sayers" target="_blank"  className="w-10 h-10 "><img src={linkedin}/></a>
            <a rel="noreferrer" href="https://www.seek.com.au/profile/ashleigh-sayers-7P2qZdrt3S" target="_blank" className="w-10 h-10"><img src={seek} /></a>

            

            </div>

            
        </div>
        </div>
        
    )
}