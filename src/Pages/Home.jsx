import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <main className="bg-brand-secondary min-h-screen text-brand-darkText">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 bg-brand-white">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl text-brand-clay font-bold mb-5"
          >
            Natural Remedies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-800 mb-4"
          >
            Healing from the earth — simple, safe, and natural solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg text-gray-600 italic"
          >
            Empowering everyday wellness through time-tested herbal wisdom.
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-2xl mx-auto mt-12 px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl text-white font-semibold mb-2">
            Search for Remedies
          </h2>
          <p className="text-sm text-gray-300">
            Enter a symptom or natural ingredient
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="e.g. Headache, Turmeric, Cough..."
            className="w-full px-5 py-3.5 text-gray-800 bg-transparent focus:outline-none placeholder-gray-500"
          />
          <button className="flex items-center gap-2 bg-brand-primary text-white px-5 py-3.5 hover:bg-brand-clay transition-all duration-300 rounded-r-full">
            <Search size={18} /> Search
          </button>
        </motion.div>
      </section>

      {/* Remedies Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4 pb-16">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-3xl text-white font-bold mb-10 text-center"
        >
          Popular Remedies
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Ginger", "Aloe Vera", "Cloves", "Garlic"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              // transition={{ type: "spring", stiffness: 300 }}
              className="bg-brand-clay rounded-xl shadow-lg hover:shadow-xl p-5 text-center cursor-pointer hover:bg-brand-primary transition-all duration-300 group"
            >
              <div className="text-xl font-semibold text-white mb-3 group-hover:text-white">
                {item}
              </div>
              <p className="text-sm text-gray-200 group-hover:text-gray-100">
                Short use-case or benefit here.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-xs text-gray-300 max-w-3xl mx-auto leading-relaxed border-t border-gray-700/30">
        This platform is focused on natural and traditional remedies, not
        regular Western medical practice. The content is provided for
        educational purposes only and is not a substitute for professional
        medical advice, diagnosis, or treatment.
      </footer>
    </main>
  );
}

export default Home;
