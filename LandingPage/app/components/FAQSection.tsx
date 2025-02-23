import React from 'react';
import FAQItem from './FAQItem';
import CallToAction from './CallToAction';

interface FAQData {
  question: string;
  iconSrc: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "How is Gradius different?",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/601918a047e60e0559adb277c02f10728c82dbbc97dcfc9a92f5cd2894b283c1?apiKey=1fb2522fd6c94611a6950922dca36db5&",
    answer: "Gradius is different because of two key areas. First, it identifies your learning shortfalls with unparalleled granularity by analyzing your performance in each “microtopic” and assigning a knowledge score to each of them. Second, it adapts dynamically to help you overcome those challenges, explaining concepts in the way that best matches your learning style. " 
  },
  {
    question: "How do you identify my learning style?",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/601918a047e60e0559adb277c02f10728c82dbbc97dcfc9a92f5cd2894b283c1?apiKey=1fb2522fd6c94611a6950922dca36db5&",
    answer: "Everyone has their own unique learning style—some people grasp concepts better through visuals, others through step-by-step logic, while some need hands-on practice. At Gradius, we identify your learning style using two key inputs. First, throughout your study journey, we ask you a series of targeted questions designed in collaboration with neuroscientists and based on academic research. We’ve transformed these insights into an algorithm that continuously refines its understanding of how you learn best, based on your responses. Second, thanks to our self-training capability, Gradius learns from your interactions over time. As you engage with the platform, we collect valuable insights into which explanations, formats, and approaches work best for you, allowing us to personalize your learning experience with increasing precision." 
  },
  {
    question: "Why can I only import quizzes and flashcards from other platforms?",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/601918a047e60e0559adb277c02f10728c82dbbc97dcfc9a92f5cd2894b283c1?apiKey=1fb2522fd6c94611a6950922dca36db5&",
    answer: "Right now, we're focusing entirely on adaptability—making sure Gradius can deeply understand your learning needs and personalize your study experience accordingly. However, we’ll soon integrate the ability to upload your own materials (PDFs, Word documents, PowerPoints, etc.), allowing Gradius to generate flashcards, quizzes, and other study tools directly from your content. Stay tuned!" 
  },
  {
    question: "How can I give my advice on how to improve Gradius?",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/601918a047e60e0559adb277c02f10728c82dbbc97dcfc9a92f5cd2894b283c1?apiKey=1fb2522fd6c94611a6950922dca36db5&",
    answer: "Every single user is like a developer to us! Join our Discord channel and talk directly with our developers—share your feedback, suggest improvements, and help shape Gradius into the perfect learning tool for you. We’re building this together! 🚀" 
  }
];


const FAQSection: React.FC = () => {
  return (
    <div className="flex flex-col text-black">
      <div className="flex overflow-hidden flex-col items-center px-72 py-24 w-full min-h-[771px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col self-stretch w-full text-center max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h2 className="text-6xl font-medium tracking-tighter leading-none max-md:max-w-full max-md:text-4xl text-[#F3ECFE]">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg tracking-tight leading-none max-md:max-w-full text-[#F2EBFD]">
              Everything you need to know about the product and features.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-16 max-w-full text-base w-[800px] max-md:mt-10">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} iconSrc={item.iconSrc} answer={item.answer} />
          ))}
        </div>
        <CallToAction />

      </div>
    </div>
  );
};

export default FAQSection;


