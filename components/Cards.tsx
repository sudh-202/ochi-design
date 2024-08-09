import Image from "next/image";
const Cards = () => {
    return ( 
        <section className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-20">
            <div className="cardcontainer h-[50vh] w-1/2 ">
              <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                <Image className="w-48" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo1" width={100} height={100} />
                <button className="absolute left-10 bottom-10 text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-full py-2 px-3 text-md">&copy; 2019-2022</button>
              </div>
            </div>
            <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
               <div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl"> 
               <Image className="w-48" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="logo1" width={100} height={100} />
               <button className="absolute left-10 bottom-10 text-white border-[1px] border-white  rounded-full py-2 px-3 text-md uppercase">rating 5.0 on clutch</button>
               </div>
               <div className="card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl">          
               <Image className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="logo1" width={100} height={100} />
               <button className="absolute left-10 bottom-10 text-white border-[1px] border-white rounded-full py-2 px-3 text-md uppercase">business bootcamp alumni</button>
                </div>
            </div>
        </section>
     );
}
 
export default Cards;