import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Sparkles, Award, Globe, ChevronRight, Play } from 'lucide-react';

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { number: "500K+", label: "Happy Customers" },
    { number: "50+", label: "Countries Worldwide" },
    { number: "4.8★", label: "Average Rating" },
    { number: "100%", label: "Women-Led Team" }
  ];

  const timeline = [
    { year: "2020", title: "The Beginning", desc: "Founded with a vision to revolutionize audio for women" },
    { year: "2021", title: "First Launch", desc: "Launched our signature collection with overwhelming response" },
    { year: "2023", title: "Global Expansion", desc: "Reached 50+ countries and 500K+ satisfied customers" },
    { year: "2024", title: "Innovation Award", desc: "Recognized for best design & technology in audio" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - boAt inspired bold energy */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 opacity-90"></div>
        
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              REDEFINING SOUND
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Premium audio engineered for the modern woman
            </motion.p>
            <motion.button
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Our Story <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Nykaa inspired elegance */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                onHoverStart={() => setHoveredStat(idx)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: hoveredStat === idx ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story - Bose inspired sophistication */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl h-96 flex items-center justify-center">
                  <Headphones className="w-40 h-40 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black mb-6">Crafted for Excellence</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We started with a simple belief: women deserve audio technology that's designed specifically for them. Not adapted. Not compromised. But truly created with their needs, style, and comfort in mind.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Every product undergoes rigorous testing, refined through feedback from thousands of women worldwide. The result? Earbuds that deliver studio-quality sound while complementing your unique style.
              </p>
              <motion.button
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection <ChevronRight />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - boAt inspired energy */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-2xl font-black">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Nykaa inspired elegance */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-black text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why We're Different
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Premium Design", desc: "Fashion-forward aesthetics meet cutting-edge technology" },
              { icon: Award, title: "Superior Quality", desc: "Award-winning sound engineering for an immersive experience" },
              { icon: Globe, title: "Global Community", desc: "Join 500K+ women who've elevated their audio game" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <value.icon className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - boAt inspired boldness */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE THE DIFFERENCE
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join the audio revolution designed exclusively for women
          </motion.p>
          <motion.button
            className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            SHOP NOW
          </motion.button>
        </div>
      </section>
    </div>
  );
}