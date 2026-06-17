import { useEffect, useState } from "react"
import Background from "./Components/BackGround/BackGround";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import FeaturedCars from "./Components/FeaturedCars/FeaturedCars";
import WhyElectric from "./Components/WhyElectric/WhyElectric";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passion"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus]= useState(false);

  useEffect(()=>{
    const interval = setInterval(() =>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
    return () => clearInterval(interval);
  },[])

  // Scroll Reveal Animation Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <div id="home" className="home-container">
            <NavBar/>
            <Hero 
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
        </div>
        <FeaturedCars />
        <WhyElectric />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}
export default App