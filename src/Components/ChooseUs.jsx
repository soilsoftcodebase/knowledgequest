import React from 'react';

const KnowledgeQuestCards = () => {
  return (
    <div className="bg-gradient-to-r from-[#265676] to-[#022b46] py-12 flex justify-center items-center">
      <div className="w-full max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffb134] text-center mb-8">
          Why Choose Knowledge Quest?
        </h1>
        <p className="text-lg md:text-xl text-white text-center mb-6">
          Our program offers an integrated approach to mastering real-world
          skills:
        </p>
        <div className="flex justify-center items-center py-8">
          <div className="text-center max-w-3xl w-full">
            <h2 className="text-2xl text-[#ffb134] mb-4">
              ● Real-Time Training
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center py-8 px-6 md:px-4">
              {/* Text Section */}
              <div className="flex-1">
                <ul className="text-lg text-white space-y-4 text-center md:text-left">
                  <li>
                    ✓ Learn every concept with real-time practical examples.
                  </li>
                  <li>✓ Solve real-world problems through case studies.</li>
                  <li>✓ Identify problems and develop innovative solutions.</li>
                  <li>
                    ✓ Focus on thought processes, innovation, and critical
                    thinking.
                  </li>
                  <li>
                    ✓ Build projects from start to finish and host them in live
                    production environments.
                  </li>
                </ul>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex justify-center">
                <img
                  className="w-full max-w-lg md:max-w-xl object-cover"
                  src="./src/assets/rb_26619.png"
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeQuestCards;
