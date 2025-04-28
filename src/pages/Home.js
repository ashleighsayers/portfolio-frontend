import { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import ReadMore from "./ReadMore";
import emailjs from "emailjs-com";
import { RiArrowDownWideFill } from "react-icons/ri";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";



import react from "../img/react.svg"
import node from "../img/nodejs.svg"
import js from "../img/js.svg"
import html from "../img/html.svg"
import css from "../img/css.svg"
import mongo from "../img/mongo.svg"
import tailwind from "../img/tailwindcss.svg"
import express from "../img/express.svg"
import rest from "../img/rest.svg"
import aws from "../img/aws.svg"
import json from "../img/json.svg"
import gradshow from '../img/gradshow.png'
import serbius from "../img/serbius.png"  


export default function Home() {
    gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

    const [projects, setProjects] = useState([]);
    const [langs, setLangs] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedProject, setSelectedProject] = useState([]);
    const navigate = useNavigate();

    const fetchProjects = () => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
            setProjects((data.projects || []).sort((a, b) => new Date(b.filter) - new Date(a.filter)));
            })
            .catch(error => console.error('Error fetching data:', error));
        };
    
        const fetchLangs = () => {
            fetch('/langs.json')
                .then(response => response.json())
                .then(data => {
                setLangs(data.langs);
                })
                .catch(error => console.error('Error fetching data:', error));
        };
        
        
        useGSAP(() => {
            
            gsap.utils.toArray('.project:nth-child(odd)').forEach((el) => {
              gsap.from(el, {
                x: 20,
                opacity: 0,
                duration: 1.5,
                scrollTrigger: {
                  trigger: el,
                  opacity: 1,
                  x: 0,
                  start: "top 80%",
                  toggleActions: "play none none reset",
                }
              });
            });
        
            gsap.utils.toArray('.project:nth-child(even)').forEach((el) => {          
              gsap.from(el, {
                x: -20,
                opacity: 0,
                duration: 1.5,
                scrollTrigger: {
                  trigger: el,
                  opacity: 1,
                  x: 0,
                  start: "top 80%",
                  toggleActions: "play none none reset",
                }
              });
            });

            // 💥 Important: force ScrollTrigger to recalculate layout after a short delay
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100); // tweak the delay if needed
        }, [projects]);
        
          
          

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_KEY,  // EmailJS service ID from .env
            process.env.REACT_APP_TEMPLATE_KEY, // EmailJS template ID from .env
            form.current,
            process.env.REACT_APP_USER_KEY      // EmailJS user ID from .env              
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message.');
        });
    };   

    useEffect(() => {
    generateStars();
    fetchProjects();
    fetchLangs()
    }, []);

    
      const generateStars = () => {
        const starContainer = document.querySelector('.stars');
        const numStars = 23; 
        const colors = ['#fff', '#FED8E2', '#E0E9F6', '#FCFDFF', '#FFD7FD']; 
      
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          const size = Math.random() * 2 + 1; // Random size between 1px and 4px
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDuration = `${Math.random() * 3 + 2}s`;
          star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          starContainer.appendChild(star);
        }
    };

    const langImages = {
        nodejs: node,
        mongodb: mongo,
        html,
        expressjs: express,
        css,
        js,
        react,
        api: rest,
        json,
        tailwindcss: tailwind,
        aws
    };

    const companies = {
        serbius,
        curtinGrad: gradshow
    }
      
    
    const selectiveProject = (project) => {
        setSelectedProject(project)
    }

    
      
    return(
        <div  className="h-full min-w-screen relative " >
            <div className="z-50 relative">
                <Nav />
            </div>

            <div className="container fixed -z-10  flex flex-col top-0 left-0 overflow-y-scroll scroll-smooth min-w-full min-h-full justify-center items-center  bg-gradient-to-b from-slate-950 via-indigo-950  to-pink-900 ">
                <div className="stars"></div>
            </div>

            <div className="container pl-8 md:pr-40 sm:pr-8 relative flex flex-col  min-w-full gap-1">


                    
                    <div className="text-white w-full container text-center flex h-screen  flex-col gap-5 content-center items-center justify-center">
                        <h1 className="md:text-6xl down-animation sm:text-3xl scaling-animation cursive font-bold">Ashleigh Sayers</h1>
                        <h3 className="md:text-3xl left-animation sm:text-xl roboto">A developer with an artist's soul</h3>
                        <RiArrowDownWideFill className="text-white up-down-animation text-6xl font-thin text-center"/>
                    </div>

                    

                    <div className=" container justify-center text-center  flex w-full  ">
                        <div className="md:w-full sm:w-full bg-slate-900  text-white p-5 gap-2 container flex flex-col  ">
                            <h1 className="md:text-4xl sm:text-2xl cursive-bold py-3">Hello, I'm Ashleigh</h1>
                            <p className="roboto-reg md:text-lg sm:text-md">As a designer and developer, I am passionate about <b className="roboto-bold text-pink-800 text-xl">merging creativity </b>  with <b className="roboto-bold text-xl text-pink-800 ">technical precision</b>, crafting experiences that are both visually stunning and functionally robust. With a deep appreciation for elegant design and efficient code, I work tirelessly to create seamless,<b className="roboto-bold text-xl text-pink-800 "> user-friendly web applications.</b>  My journey is fueled by a love for innovation and a penchant for solving complex problems. </p>
                            <p className="roboto-reg md:text-lg sm:text-md"> I'm Ashleigh Sayers, a developer with an artist's soul, always striving to bring a <b className="roboto-bold text-pink-800 text-xl">touch of the extraordinary to the digital world.</b></p>
                            <div className="flex justify-center md:gap-5 sm:gap-2 m-5">
                                {langs.map((lang, i) => (
                                    <img key={i} src={langImages[lang]} alt={lang} className="max-w-10 max-h-10 min-w-5 min-h-5" />
                                ))}
                            </div>
                            
                        </div>
                    </div>

                    {projects.map((project, i) => (
                        <div key={i} className={`project py-10`}>
                            <div className="md:w-4/5 sm:w-full container  flex flex-col gap-1"> 
                                <h1 className="sm:text-lg md:text-2xl"><b className="sm:text-xl md:text-3xl">{project.name}</b> | {project.company}</h1>
                                <h3 className="md:text-xl sm:text-lg roboto text-white"> {project.position} | {project.date} </h3>
                                <p className="md:text-lg sm:text-md roboto-reg text-white inline"> {project.desc} {/*} <a href={`/read-more/${project.name.toLowerCase().replace(/\s+/g, "-")}`} target="_blank" rel="noreferrer" onClick={() => selectiveProject(project)}  className="text-pink-400 font-bold">...read more</a>{*/}</p>

                                <div className="container flex md:flex-row sm:flex-col md:justify-between sm:justify-center md:gap-5 gap-5 mt-3">
                                    <div className="flex container md:flex-row sm:flex-col md:justify-normal md:w-1/2 sm:w-full sm:justify-between md:gap-4 sm:gap-5">

                                    <div className="flex flex-row gap-4 sm:w-full sm:justify-center md:justify-start"> 
                                        {project.lang.map((language, i) => (
                                            <img key={i} src={langImages[language]} alt={language} className="w-10 h-10" />
                                        ))}
                                    </div>
                                    
                                    
                                    </div>

                                    <div className=" md:w-fit  sm:w-full  flex sm:justify-center">
                                        {project.link.includes("https://") && (
                                            <a href={project.link} rel="noreferrer" target="_blank" className="text-lg roboto-bold bg-pink-600 hover:bg-pink-800 text-center min-h-10  text-white p-2 ">CHECK IT OUT</a>
                                        )}    
                                    </div>
                                </div>
                            </div>  
                        </div>
                    ))}

                    <div className="container w-full flex justify-center py-10">
                        <div className=" container flex justify-center items-center flex-col gap-10">
                            <h1 className="text-3xl  text-white text-center cursive-bold">Contact Me</h1>

                            <form ref={form} onSubmit={sendEmail} className="container md:w-3/4 sm:w-full flex flex-col justify-center  gap-5">
                                <div className="container flex flex-col justify-center items-center gap-3">
                                <div className="flex  container md:flex-row sm:flex-col justify-center gap-2">
                                    <input name="from_name" className="bg-transparent  border-2 placeholder-white border-white border-solid p-2 text-center text-white roboto-bold rounded-lg md:w-1/3 sm:w-full" placeholder="Name" />
                                    <input name="from_company" className="bg-transparent  border-2 placeholder-white border-white border-solid p-2 text-center text-white roboto-bold rounded-lg md:w-1/3 sm:w-full" placeholder="Company" />
                                </div>

                                <div className="flex  container md:flex-row sm:flex-col  justify-center gap-2 ">
                                    <input name="from_email" className="bg-transparent  border-2 placeholder-white border-white border-solid p-2 text-center text-white roboto-bold rounded-lg md:w-2/3 sm:w-full" placeholder="Email" />
                                </div>

                                <div className="flex  container md:flex-row sm:flex-col  justify-center gap-2 ">
                                    <input name="subject" className="bg-transparent  border-2 placeholder-white border-white border-solid p-2 text-center text-white roboto-bold rounded-lg md:w-2/3 sm:w-full" placeholder="Subject" />
                                </div>

                                <div className="flex  container md:flex-row sm:flex-col  justify-center gap-2 ">
                                    <textarea name="message" rows={5} className="bg-transparent placeholder-white  border-2 border-white border-solid p-2 text-center text-white roboto-bold rounded-lg md:w-2/3 sm:w-full" placeholder="Message" />
                                </div>

                                <div className="container  flex md:w-2/3 sm:w-full justify-end ">
                                    <button type="submit" className="bg-pink-500 p-2 px-10 uppercase  text-white hover:bg-pink-800">Submit</button>
                                </div>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-center text-white py-5">Copyright © 2025 ARSayers. v2.0</p>
                    </div>
                </div>
            
        </div>
    )
}