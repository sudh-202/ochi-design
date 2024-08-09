"use client"
import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div data-scroll data-scroll-speed=".9" className="w-full py-20 bg-[#004D43] rounded-t-3xl">
            <div className="text border-t-2  border-b-2 border-[#3A756E]  flex whitespace-nowrap overflow-hidden text-white ">
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[20vw]   leading-[300px] font-founders font-semibold uppercase tracking-[-0.06em] pr-20">We are OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[20vw]  leading-[300px] font-founders font-semibold uppercase  tracking-[-0.06em] pr-20">We are OCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[20vw]  leading-[300px] font-founders font-semibold uppercase  tracking-[-0.06em] pr-20">We are OCHI</motion.h1>
            </div>
        </div>
    );
}

export default Marquee