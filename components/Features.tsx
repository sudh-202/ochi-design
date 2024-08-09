import Image from "next/image";
import { featuredProjects } from "../constant/index";

const Features = () => {
    return (
        <div className="w-full py-24">
            <h1 className="font-founders text-[#212121] text-6xl px-20 border-b-[3px] pb-10 tracking-tighter">Featured projects</h1>
            <div className="cards w-full p-20">
                {featuredProjects.map((project, index) => (
                    <div key={project.id} className={`cardcontainer pb-10 relative w-full md:w-1/2 h-[80vh] inline-block align-top ${index % 2 === 0 ? 'pr-2' : 'pl-2'}`}>
                        {/* <h1 className={`absolute font-semibold ${index % 2 === 0 ? 'left-full' : 'right-full'} text-[#CDEA68] top-1/2 ${index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'} -translate-y-1/2 z-[9] text-8xl font-founders leading-none tracking-tighter`}>
                            {project.title}
                        </h1> */}
                        <div className="card overflow-hidden rounded-xl w-full h-full">
                            <Image src={project.imageSrc} alt={project.title} width={2000} height={1500} className="bg-cover w-full h-full" />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center">
                            {project.tasks.map((task, taskIndex) => (
                                <div key={taskIndex} className="bg-white rounded-full px-4 py-2 text-sm font-medium border border-gray-300">
                                    {task}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;