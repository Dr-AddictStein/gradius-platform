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

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen  max-w-[1450px] mx-auto bg-red-500 bg-[url('/assets/bg2.png')] bg-cover  pt-10">
        {/* Main content */}
        <main className="relative z-10 overflow-y-hidden">
          <div className="mt-20  ">
            {" "}
            <NavigationBar />
          </div>
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
          <ChooseGradiusNew></ChooseGradiusNew>
          <ChooseGradiusContent></ChooseGradiusContent>
          <PricingPlans></PricingPlans>
          <FAQSection/>
          {/* <ChooseGradius />
          <Footer companyLinks={[]} infoLinks={[]} /> */}
        </main>
      </div>
    </div>
  );
}
