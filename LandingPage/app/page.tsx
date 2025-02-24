import NavigationBar from "./components/NavigationBar";
import MainComponent from "./components/MainComponent";
import Hero from "./components/hero";
import DashBoard from "./components/Dashboard";
import LogoCarousel from "./components/LogoCarousel";
import PersonalizedLearning from "./components/PersonalizedLearning";
import { HowItWorks } from "./components/HowItWorks";
import NewSection from "./components/NewSection";
import AdaptiveLearningFeatures from "./components/AdaptiveLearningFeatures";
import ChooseGradius from "./components/ChooseGradius";
import ChoseGradius from "./components/ChoseGradius";
import Image from 'next/image';
import Footer from "./components/Footer";
import Study from "./components/Study";

export default function Home() {
  return (
    <div 
  className="min-h-screen bg-red-500 bg-[url('/bg.png')] bg-cover bg-top bg-no-repeat"
>
  {/* Main content */}
  <main className="relative z-10 overflow-y-hidden">
   <div className='mt-20 border'> <NavigationBar /></div>
    <Hero />
    <DashBoard />
    <LogoCarousel />
    <PersonalizedLearning />
    <Study></Study>
    <HowItWorks />
    <AdaptiveLearningFeatures />
    <ChooseGradius />
    <Footer companyLinks={[]} infoLinks={[]} />
  </main>
</div>

  );
}