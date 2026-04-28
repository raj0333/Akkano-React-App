import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  const benefits = [
    {
      bold: "Objective Clarity:",
      text: ' No more guessing or "he-said-she-said."',
    },
    {
      bold: "Actionable Tools:",
      text: " Strategies you can use.",
    },
    {
      bold: "Long-term Growth:",
      text: " A foundation for your next 10, 20, or 30 years.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://player.vimeo.com/video/1097736762"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#111827] mb-6 leading-tight tracking-tight">
              <span className="font-medium">Your Relationship Has A DNA.</span> <br className="hidden md:block" />
              We Just Mapped It.
            </h2>

            <p className="text-[15px] md:text-base text-gray-700 mb-8 leading-relaxed">
              Counselling often focuses on what's wrong. We focus on what's right with you. We move past 'who is right' and discover 'how we work best together. Our methodology doesn't just identify your triggers. It provides a concrete, 12-page manual for your unique partnership, helping you build a bond that is resilient, predictable, and deeply fulfilling.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#0f4c3a] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] md:text-base text-gray-700">
                    <span className="font-bold text-gray-900">{benefit.bold}</span>
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0f4c3a] text-white px-8 py-3.5 rounded-xl hover:bg-[#0a3629] transition-colors font-semibold shadow-sm">
                Get Started
              </button>

              <button className="border-2 border-[#0f4c3a] text-[#0f4c3a] bg-white px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors font-bold shadow-sm">
                How It Works
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}