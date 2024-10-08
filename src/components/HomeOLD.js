import { useEffect, useState } from "react";
import toothless from '../img/toothless.png'
import Nav from "./Nav";

export default function HomeOld() {
    
    useEffect(() => {
        generateStars();
      }, []);
    
      const generateStars = () => {
        const starContainer = document.querySelector('.stars');
        const numStars = 15; 
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

    return(
        <div>
            <Nav />
            <div className="container flex  min-w-full h-screen justify-center items-center  bg-gradient-to-b from-slate-950 via-indigo-950  to-pink-800 ">
                <div className="stars"></div>

                <div className="container grid grid-cols-2 gric-rows-2  min-w-full h-full gap-1">
                    <div className=" col-span-2 " >
                        
                    </div>
                    <div className="text-white mx-20 container flex flex-col gap-5 justify-center">
                        <h1 className="text-6xl  cursive font-bold">Ashleigh Sayers</h1>
                        <h3 className="text-3xl roboto">A developer with an artist's soul</h3>
                    </div>
                    <div className=""></div>
                </div>
            </div>

            <div className="about p-10 container grid grid-cols-3 min-w-full gap-10 bg-white">
                <div className="bg-pink-700 col-span-1  h-80"></div>
                <div className="col-span-2 container flex gap-5 flex-col">
                    <h1 className="text-4xl  text-black cursive-bold">About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                        laborum. 
                    </p>
                    <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Integer placerat ut molestie mi rhoncus rutrum tristique 
                        suscipit. Dolor nulla ante nunc ultrices semper. Pellentesque nibh blandit parturient magnis fames molestie. 
                        Elementum vehicula interdum nascetur, senectus phasellus ornare finibus. Himenaeos etiam eu cursus suspendisse 
                        dignissim quisque. Eleifend sit iaculis tellus sapien scelerisque mollis ornare. Platea enim vitae ridiculus 
                        habitant dolor vehicula. Congue quisque ante id tempus feugiat facilisis tempus vestibulum. Habitasse gravida 
                        sapien mollis, aptent urna montes.    
                    </p>
                </div>
            </div>
        </div>
    )
}