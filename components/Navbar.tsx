import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed z-[999] flex items-center justify-between p-4 w-full px-20 py-4 bg-[#FFFFFF]">

            <Image src="/logo.svg" alt="Logo" width={70} height={100} className="mr-4" />

            <div className='links flex gap-10 '>

                {["Services", "About Us", "Our Work", "Insights", "Contact Us"].map((item, index) => (
                    <Link className={`text-black flex text-lg capitalize font-light ${index===4 &&" ml-32"}`} key={index} href={`/${item.toLowerCase()}/`}>{item}</Link>
                ))}
            </div>


        </nav>
    );
};

export default Navbar;
