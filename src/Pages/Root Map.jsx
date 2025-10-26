import React from "react";
import { motion } from "framer-motion";
import { royce1 } from "../assets/files/Images/picturesExport";


function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-brand-secondary py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-clay mb-6"
          >
            Welcome to the Root Map
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-100 leading-relaxed"
          >
            This page introduces our vision, our method, and how you can
            navigate and trust the natural remedies we offer.
          </motion.p>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              title: "What This Site Is About",
              content: [
                "Natural Remedies is a curated resource for everyday people who want to understand and explore safe, traditional healing options. We believe that nature offers a gentle and powerful approach to everyday wellness.",
                "Whether you're looking to ease a headache, improve sleep, or understand how herbs support digestion — we guide you with simple, honest explanations.",
              ],
            },
            {
              title: "How We Categorize Remedies",
              content: [
                "To help you find what you need quickly and clearly, we organize all remedies by both:",
              ],
              list: [
                "Symptoms – like headache, insomnia, indigestion, cough, or low energy",
                "Body Systems – like digestive health, respiratory system, skin, nerves, or immunity",
                "Remedy Type – such as teas, oils, tinctures, baths, or spices",
              ],
              extra:
                "This helps you discover what’s useful to you — either by what you’re feeling or by how you want to treat it.",
            },
            {
              title: "Our Approach",
              content: [
                "We believe natural healing is about balance — between traditional wisdom and practical modern understanding. Every remedy shared here is chosen for its simplicity, accessibility, and history of safe use.",
                "We do not list everything. We focus on what has been time-tested, well-regarded in multiple cultures, and supported by either research or experience. We value honesty over hype.",
                "Our language is kept clear, not medical-jargon heavy. This site is for people, not professionals — though we always recommend consulting a health expert when needed.",
              ],
            },
            {
              title: "Responsible Usage",
              content: [
                "Natural remedies can be powerful — but they are not one-size-fits-all. Everyone’s body is different, and what works for one person may not suit another.",
                "We encourage you to use this site as a thoughtful guide, not a substitute for medical advice. If you are pregnant, nursing, on medication, or dealing with a serious condition, please consult a healthcare professional before trying any remedy.",
                "We don’t sell remedies. We don’t push products. We share what we know and let you make informed, respectful choices for your own wellbeing.",
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-brand-darkText mb-4">
                {section.title}
              </h3>
              {section.content.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-gray-700 leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside mt-4 text-base text-gray-700 space-y-2">
                  {section.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
              {section.extra && (
                <p className="text-base text-gray-700 mt-4 leading-relaxed">
                  {section.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Creator Section */}
      <section className="w-full bg-gray-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-brand-darkText mb-8"
          >
            Meet the Creator
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src={royce1}
              alt="Creator"
              className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white"
            />
            <div className="space-y-4 text-gray-700 text-base leading-relaxed max-w-xl">
              <p>
                Hi, I’m Okoh Chukwudi. I started this platform because I wanted
                natural remedies to be gathered in one place; easy to access,
                reliable, and rooted in tradition.
              </p>
              <p>
                But this site isn’t just about me. It’s a community effort,
                where herbalists, practitioners, and people with valuable
                knowledge can share remedies. By bringing together many voices,
                we build a resource that’s more diverse, trustworthy, and
                helpful than any one person could create alone.
              </p>
              <p>
                Whether you’re here to discover remedies or contribute your own,
                this space is designed to grow with you. Together, we’re
                creating a living hub of natural wisdom; one that respects
                tradition, welcomes collaboration, and empowers you to make
                informed choices for your wellbeing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
