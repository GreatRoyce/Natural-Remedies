import React from "react";

function Disclaimer() {
  return (
        <>
    
          <section className="w-full bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold  text-brand-clay  m-16 mb-4">
                Guidance
              </h2>
              <p className="text-lg text-brand-secondary">
                Navigate your healing journey with clarity and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-brand-primary p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-brand-darkText mb-2">
                  1. Start with What You Feel
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Use the search bar to enter symptoms like "headache", "low
                  energy", or "bloating". You'll see gentle remedies chosen to
                  match.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-brand-secondary p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-brand-darkText mb-2">
                  2. Choose Your Approach
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Whether tea, oil, or spice — every remedy includes how it's used
                  and what to expect. Pick what suits your lifestyle and comfort.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-brand-accent/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-brand-darkText mb-2">
                  3. Be Mindful & Gentle
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Natural remedies are powerful — begin small and observe your
                  body’s response. Especially if you're pregnant, nursing, or on
                  medication.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-brand-clay/10 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-brand-darkText mb-2">
                  4. Ask, Search, Explore
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  This site is a guide — not a prescription. Trust your curiosity,
                  and always consult a professional if unsure. Healing is a journey.
                </p>
              </div>
            </div>
          </section>
     
    </>
  );
}

export default Disclaimer;
