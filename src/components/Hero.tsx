"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedText,
  FadeInWhenVisible,
  ScaleInWhenVisible
} from "@/components/ui/animated-section";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      {/* Background wave shape */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-dental-teal/5 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Circle decorations */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-dental-gold/10"
        initial={{ opacity: 0, scale: 0.5, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-dental-teal/10"
        initial={{ opacity: 0, scale: 0.5, x: -50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50 }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col space-y-6">
            <AnimatedSection direction="up" type="spring" duration={0.8}>
              <h1 className="font-agbalumo text-4xl sm:text-5xl md:text-6xl text-dental-teal leading-tight">
                <AnimatedText stagger={0.04} delay={0.3}>
                  Perfect
                </AnimatedText>{" "}
                <span className="text-dental-gold">
                  <AnimatedText stagger={0.04} delay={0.6}>
                    Smiles
                  </AnimatedText>
                </span>{" "}
                <br />
                <AnimatedText stagger={0.03} delay={0.9}>
                  For Everyone
                </AnimatedText>
              </h1>
            </AnimatedSection>

            <FadeInWhenVisible delay={1.2} duration={0.8}>
              <p className="font-epilogue text-lg text-slate-700 max-w-xl">
                At Golden Smile Creation, we are dedicated to transforming your smile with the highest standards of quality and advanced dental technology.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={1.5} duration={0.8}>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-dental-teal hover:bg-dental-teal/90 text-white font-epilogue text-lg">
                    Book Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-dental-gold text-dental-gold hover:bg-dental-gold/10 font-epilogue text-lg">
                    Our Services
                  </Button>
                </motion.div>
              </div>
            </FadeInWhenVisible>

            {/* Statistics */}
            <FadeInWhenVisible delay={1.8} duration={0.8}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
                <ScaleInWhenVisible delay={2.0}>
                  <div className="flex flex-col">
                    <span className="font-agbalumo text-3xl text-dental-teal">+10</span>
                    <span className="font-epilogue text-slate-600">Years of Experience</span>
                  </div>
                </ScaleInWhenVisible>
                <ScaleInWhenVisible delay={2.2}>
                  <div className="flex flex-col">
                    <span className="font-agbalumo text-3xl text-dental-teal">+5000</span>
                    <span className="font-epilogue text-slate-600">Happy Patients</span>
                  </div>
                </ScaleInWhenVisible>
                <ScaleInWhenVisible delay={2.4}>
                  <div className="flex flex-col">
                    <span className="font-agbalumo text-3xl text-dental-teal">+25</span>
                    <span className="font-epilogue text-slate-600">Specialists</span>
                  </div>
                </ScaleInWhenVisible>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Image */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute inset-0 bg-dental-gold/10 rounded-full blur-3xl transform -translate-x-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="relative rounded-full overflow-hidden border-8 border-white shadow-xl w-[350px] h-[350px] flex items-center justify-center bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                type: "spring",
                stiffness: 50
              }}
            >
              {/* Here we use a tooth SVG as temporary image until we have the real image */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-56 h-56 text-dental-teal"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 60
                }}
              >
                <motion.path
                  d="M12 5.5c-7.5 0-7 8-7 8 0 7 6 6 6 6-1-3 1-3 1-3 8.5 0 6-14 0-11z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M12 5.5c7.5 0 7 8 7 8 0 7-6 6-6 6 1-3-1-3-1-3-8.5 0-6-14 0-11z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
