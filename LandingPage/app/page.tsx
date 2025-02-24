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
      className="bg-[url('/bg.png')]  bg-center  mx-auto w-full pt-10"
    >


      {/* Main content */}
      <main className="relative z-10 overflow-y-hidden">
        <div className='mt-20  '> <NavigationBar /></div>
        <div className="border-none border-red-600 ">
          <Hero />
        </div>
        <DashBoard />
        <LogoCarousel />
        <PersonalizedLearning />

        <div className="">
          <Study></Study>
        </div>
        <HowItWorks />
        <AdaptiveLearningFeatures />
        <ChooseGradius />
        <Footer
          companyLinks={[
            { "name": "Home", "url": "/" },
            { "name": "Features", "url": "/features" },
            { "name": "How it works", "url": "/how-it-works" },
            { "name": "Pricing", "url": "/pricing" },
            { "name": "FAQ", "url": "/faq" }
          ]}
          infoLinks={[
            { "name": "Privacy", "url": "/privacy" },
            { "name": "Terms & Policy", "url": "/terms-policy" },
            { "name": "404", "url": "/404" }
          ]}
        />

      </main>
    </div>

  );
}