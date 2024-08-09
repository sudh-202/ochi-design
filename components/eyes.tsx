"use client"
import { useEffect, useState } from "react";

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle-180)

        })
    })

    return (
        <div className="w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute flex gap-10 top-1/2 left-1/2  h-96 -translate-x-[50%] -translate-y-[50%]">
                    <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
                        <div className="w-2/3 h-2/3 rounded-full bg-black relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-10 h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
                        <div className="w-2/3 h-2/3 rounded-full bg-black relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-10 h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;