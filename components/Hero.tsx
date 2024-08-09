"use client"
import { motion } from "framer-motion";
import {FaArrowUpLong} from "react-icons/fa6";

const Hero = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full h-screen pt-1">
            <div className="textsturcture mt-48 px-20">
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex overflow-hidden'">
                                {index === 1 && (
                                    <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1, ], duration: 1}}  className="mr-[1vw] mt-2 w-[9vw] h-[5.8vw] relative bg-[url('/hero-1.jpg')] contain rounded-md"></motion.div>)}
                            <h1 className="uppercase text-[8vw] leading-[7vw] tracking-[-0.02em] font-founders font-bold text-[#212121] ">{item}</h1>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="border-t-[1px] border-zinc-400 mt-24 py-5 px-20 flex flex-row justify-between items-center">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className="text-md font-light tracking-tight leading-none ">{item}</p>
                )}
                <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase">Start the Project</div>
                <div className="w-10 h-10  border-[1px] border-zinc-400  rounded-full flex items-center justify-center">
                   <span className="rotate-[45deg]">
                    <FaArrowUpLong />
                    </span> 
                </div>
            </div>
            </div>

            

        </div>
    );
}

export default Hero;