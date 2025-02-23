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

export default function Home() {
  return (
    <div className="h-fit w-full relative overflow-y-auto">
      {/* Background container */}
      <div className="absolute inset-0 w-full h-[140%] bg-red-500 top-0 left-0 right-0 bottom-0">
        <Image
          src="/Frame 1216259520.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <NavigationBar />
        <Hero />
        <DashBoard />
        <LogoCarousel />
        <PersonalizedLearning />
        <HowItWorks />
        <AdaptiveLearningFeatures />
        <ChooseGradius />
        <Footer companyLinks={[]} infoLinks={[]} />
      </main>
    </div>
  );
}