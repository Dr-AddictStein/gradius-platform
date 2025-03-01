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
import Image from "next/image";
import Footer from "./components/Footer";
import Study from "./components/Study";
import ChooseGradiusNew from "./components/ChooseGradiusNew";
import ChooseGradiusContent from "./components/ChooseGradiusContent";
import PricingPlans from "./components/PricingPlans";
import FAQSection from "./components/FAQSection";
import UpLavel from "./components/UpLavel";

export default function Home() {

  const companyLinks = [
    { name: "Home", url: "/" },
    { name: "Features", url: "/features" },
    { name: "How it works", url: "/how-it-works" },
    { name: "Pricing", url: "/pricing" },
    { name: "FAQ", url: "/faq" },
  ];

  const infoLinks = [
    { name: "Privacy", url: "/privacy" },
    { name: "Terms & Policy", url: "/terms-policy" },
    { name: "404", url: "/404" },
  ];

  return (
    <div className="">
      <div className="min-h-screen w-full  bg-[url('/assets/bg2.png')] bg-cover bg-top bg-no-repeat pt-10">



        {/* Main content */}
        <main className="relative z-10 overflow-y-hidden">
          <div className="mt-20">
            <NavigationBar />
          </div>

          <div id="home" className="section">
            <Hero />
          </div>

          {/* Features */}
          <div id="features" className="section mt-24">
            <DashBoard />
            <LogoCarousel />
            <PersonalizedLearning />
          </div>

          {/* How it works */}
          <div id="how-it-works" className="section mt-24">
            <Study />
            <HowItWorks />
            <AdaptiveLearningFeatures />
            <ChooseGradiusNew />
            <ChooseGradiusContent />
          </div>

          {/* Pricing */}
          <div id="pricing" className="section mt-24">
            <PricingPlans />
          </div>

          {/* FAQ */}
          <div id="faq" className="section mt-24">
            <FAQSection />

            <UpLavel></UpLavel>
          </div>

          <div className='section mt-24' >

            <Footer companyLinks={companyLinks} infoLinks={infoLinks} />
          </div>


        </main>
      </div>
    </div>
  );
}
