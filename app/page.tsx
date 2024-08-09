import About from "@/components/About";
import Cards from "@/components/Cards";
import Eyes from "@/components/eyes";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";


const Home = () => {
  return ( 
    <div className="w-full h-screen">
    <Hero/>
    <Marquee />
    <About />
    <Eyes />
    <Features />
    <Cards/>
    <Footer/>
    </div>
    
   );
}
 
export default Home;