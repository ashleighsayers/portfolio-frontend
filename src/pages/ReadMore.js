import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import icon from '../img/white_icon.svg'
import { RiArrowDownWideFill } from "react-icons/ri";

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


export default function ReadMore() {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [langs, setLangs] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.projects.find(p => 
          p.name.toLowerCase().replace(/\s+/g, "-") === projectName
        );
       
        setProject(found);
      });
  }, [projectName]);

  if (!project) return <p>Loading...</p>;

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
    
    const fetchLangs = () => {
        fetch('/langs.json')
            .then(response => response.json())
            .then(data => {
            setLangs(data.langs);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
  return (
    <div  className="h-full min-w-screen relative " >
                <div className="z-50 relative">
                    <Nav />
                </div>

                {/* <div className="sticky top-0 left-0 w-full h-20 p-5 text-white content-center">
                    <a href="/"><img src={icon} alt="arsayers icon" width="50" /></a>
                </div> */}
    
                <div className="container fixed -z-10  flex flex-col top-0 left-0 overflow-y-scroll scroll-smooth min-w-full min-h-full justify-center items-center  bg-gradient-to-b from-slate-950 via-indigo-950  to-pink-900 ">
                    <div className="stars"></div>
                </div>
    
                <div className="container pl-8 md:pr-40 sm:pr-8 relative flex flex-col  min-w-full gap-1">
                    <div className="text-white w-full container text-center flex h-screen  flex-col gap-5 content-center items-center justify-center">
                        <h1 className="md:text-6xl down-animation sm:text-3xl scaling-animation cursive font-bold">{project.name}</h1>
                        <h3 className="md:text-3xl left-animation sm:text-xl roboto">{project.position}</h3>
                        <RiArrowDownWideFill className="text-white up-down-animation text-6xl font-thin text-center"/>
                    </div>
    
                    <div className=" container justify-center text-center  flex w-full  ">
                        <div className="md:w-full sm:w-full bg-slate-900  text-white p-5 gap-2 container flex flex-col  ">
                            <h1 className="md:text-4xl sm:text-2xl cursive-bold py-3">Summary</h1>
                            <p className="roboto-reg md:text-lg sm:text-md">{project.summary}</p>
                            <div className="flex justify-center md:gap-5 sm:gap-2 m-5">
                                {project.lang.map((lang, i) => (
                                    <img key={i} src={langImages[lang]} alt={lang} className="max-w-10 max-h-10 min-w-5 min-h-5" />
                                ))}
                            </div>
                        </div>
                    </div>   
                       
    
                        
    
                        
    
                        
                        
                        <div>
                            <p className="text-center text-white py-5">Copyright © 2025 ARSayers. v2.0</p>
                        </div>
                    </div>
                
            </div>
  );
}
