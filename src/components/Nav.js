
import { useState } from "react"
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";



export default function Nav(){
    const [showNav, setShowNav] = useState(false);

    const nav = (e) => {
        setShowNav(!showNav)
    }

    return(
        <div className="">
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

            <div className="container  flex flex-col gap-5 items-center">
            <a rel="noreferrer" href="https://1drv.ms/b/c/27054642df0dbec2/ET8tBMpzw6RCirE6n2dZ4aABMOP3ZreT0klaqls7lbzGYw?e=Nq4tid" download="Ashleigh Sayers Resume APR25" target="_blank"  className="w-12 h-12 "><FaFileAlt className="w-10 h-10 text-white"/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/ashleigh-sayers" target="_blank"  className="w-10 h-10 "><FaLinkedin className="w-10 h-10 text-white"/></a>
            <a rel="noreferrer" href="https://github.com/ashleighsayers" target="_blank" className="w-10 h-10"><FaGithub className="w-10 h-10 text-white"/></a>
            </div>

        </div>
        )}

        <div className="h-screen  container md:flex sm:hidden flex-col justify-end items-center p-5 w-32 bg-gray-900  right-0 fixed  top-0">
            

            <div className="container flex flex-col gap-5 items-center">
            <a rel="noreferrer" href="https://1drv.ms/b/c/27054642df0dbec2/ET8tBMpzw6RCirE6n2dZ4aABMOP3ZreT0klaqls7lbzGYw?e=Nq4tid" download="Ashleigh Sayers Resume" target="_blank"  className="w-12 h-12 "><FaFileAlt className="w-10 h-10 text-white"/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/ashleigh-sayers" target="_blank"  className="w-10 h-10 "><FaLinkedin className="w-10 h-10 text-white"/></a>
            <a rel="noreferrer" href="https://github.com/ashleighsayers" target="_blank" className="w-10 h-10"><FaGithub className="w-10 h-10 text-white"/></a>

            

            </div>

            
        </div>
        </div>
        
    )
}