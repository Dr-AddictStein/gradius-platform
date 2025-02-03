import React from 'react'

const temp = () => {
  return (
    <div>
      <div className="min-h-[80vh] flex flex-col justify-between">
          {/* Welcome Section */}
          <div className="mb-8 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold mb-5 text-center">Hey Emilio!</h1>
            <p className="text-white mb-4 text-base text-center">
              Back for more? Let's keep learning and...
              <br />
              ...don't forget, every click makes me smarter too, I'm counting on
              you!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg w-[246px]">
              Start Studying
            </button>
          </div>

          {/* Progress Cards Slider */}
          <div className="mb-8 relative mt-20">
            {/* Centered title */}
            <div className="relative overflow-hidden">
              {/* Container with calculated width for 3 cards */}
              <div className="mx-auto w-[calc(230px*3+2*16px)] overflow-hidden">
                {" "}
                {/* 3 cards + 2 gaps */}
                <div
                  ref={sliderRef}
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentSlide * (219 + 16)}px)`, // 219px card width + 16px gap
                    gap: "16px",
                  }}
                >
                  {progressCards.map((card, index) => (
                    <div
                      key={index}
                      className="min-w-[219px] bg-gray-800 rounded-xl border-2 border-slate-400 flex-shrink-0" // Prevent card squishing
                    >
                      <div className="space-y-4">
                        {card.scores.map((score, scoreIndex) => (
                          <div
                            key={scoreIndex}
                            className="flex flex-col justify-center items-center gap-4"
                          >
                            <div className="px-6 py-5">
                              <CircularProgress value={score} />
                            </div>
                            <div className="flex gap-2 items-center justify-center bg-gray-600 w-full rounded-b-xl py-2">
                              <div
                                className={`w-5 h-5 rounded-full ${card.color}`}
                              />
                              <h3 className="font-medium">{card.subject}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Navigation Buttons - Centered horizontally */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] px-4">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className="absolute left-0 bg-purple-800 p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide >= progressCards.length - 3} // Update disable logic
                className="absolute right-0 bg-purple-800 p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default temp
