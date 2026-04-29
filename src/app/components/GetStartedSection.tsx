import { motion } from 'motion/react';


export function GetStartedSection() {
  const leftItems = [
    {
      title: 'From "Blame" to "Understanding"',
      description:
        'You will move from asking "Why are you like that?" to understanding the natural talent traits that drive words and behaviours.',
    },
    {
      title: 'Synchronized Decision-Making:',
      description:
        'You will see clearly what you each bring to your relationship, and what you each need from the other.',
    },
    {
      title: 'Constructive Conflict:',
      description:
        'Conflict is a natural part of all relationships. Get a new, neutral language to resolve conflict calmly and pragmatically.',
    },
  ];

  const rightItems = [
    {
      title: 'Emotional Energy Savings:',
      description:
        'You won\'t waste energy on repetitive arguments because you\'ll have a "user manual" for your partner\'s reactions.',
    },
    {
      title: 'Confidence in the Future:',
      description:
        'By aligning your long-term visions and "future horizons," you can stop worrying about "nasty surprises" later in life.',
    },
    {
      title: 'A "Power Couple" Dynamic:',
      description:
        'You will transition from "going fast alone" to "going far together," leveraging each other\'s strengths to achieve shared life goals.',
    },
  ];

  return (
    <section className="bg-[#0f4c3a] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-8"
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight mb-4 tracking-tight">
            Get The Relationships You Want
          </h2>
          <p className="text-[#b1d8c7] text-[15px] md:text-[17px] max-w-3xl mx-auto">
            Get the keys to building and maintaining healthy, meaningful relationships.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <img src="/icon.svg" alt="Check" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-base md:text-[17px] font-medium leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#b1d8c7] text-[14px] md:text-[15px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center w-full max-w-[360px] md:max-w-[450px] mx-auto my-8 lg:my-0 lg:mr-[40px]"
          >
            <img
              src="/couple.png"
              alt="Couple"
              className="relative mt-[60px] z-10 max-w-[720px] object-contain drop-shadow-2xl scale-110"
            />
          </motion.div>

          {/* Right Content */}
          <div className="space-y-10">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <img src="/icon.svg" alt="Check" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white text-base md:text-[17px] font-medium leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#b1d8c7] text-[14px] md:text-[15px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}