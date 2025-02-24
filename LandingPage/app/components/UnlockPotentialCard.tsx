import React from 'react';

export const UnlockPotentialCard: React.FC = () => {
  return (
    <>
      <article className="flex relative flex-col items-center px-10 pt-9 pb-40 mt-24 max-w-full w-11/12 mx-auto  text-3xl font-bold leading-none text-center text-white rounded-3xl bg-[linear-gradient(180deg,#A436F1_32.5%,#A267FE_100%)] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/54672b7c9018b8e3a3fa28357d77fe6801a561fba7da910fdd1f37532d8e918f"
          className="object-contain absolute top-1.5 left-2 z-0 self-start w-20 h-20 aspect-square"
          alt="Unlock icon"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/1fb2522fd6c94611a6950922dca36db5/4acf7f8dd7cf3ff6c2f8bdbd09893cff5a4a9c888299567456ed11dacfc4cce5"
          className="object-contain z-0 max-w-full aspect-[1.27] w-[114px]"
          alt="Unlock illustration"
        />
        <h2 className="z-0 mt-9">Unlock Your Potential!</h2>
        
        <p className="z-10 mt-12 text-base font-medium leading-6 text-center text-white max-md:max-w-full">
        Awesome! You're on the path to smarter studying. Continue, and remember: <br />
        <strong>
          every click helps Gradius become more intelligent and personalized just for you
        </strong>
      </p>
      
      </article>
      
      
    </>
  );
};