import Image from "next/image";
const About = () => {
    return (
        <div   className="w-full  bg-[#CDEA68] rounded-t-3xl mt-[10px]">
            <h1 className="font-founders p-20 text-6xl font-extralight tracking-tighter">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className="w-full px-20 py-4 border-t-2 border-[#99ad53a1] flex flex-row justify-between ">
                <div className=" flex flex-col">
                    <h2 className="font-founders text-6xl"> Our approach:
                    </h2>

                    <button className=" flex items-center gap-10 uppercase bg-[#212121] w-1/2 text-white rounded-full my-6 px-5 py-5 text-sm">Read more
                        <div className="w-2 h-2 rounded-full  bg-white"></div>
                    </button>

                </div>
                <Image src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" width={695} height={100} className="rounded-xl" />
            </div>
        </div>
    );
}

export default About;