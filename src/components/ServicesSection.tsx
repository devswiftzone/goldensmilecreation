"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, ScaleInWhenVisible, FadeInWhenVisible } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      duration: 0.8,
      delay: 0.1 * index,
      stiffness: 100,
      damping: 15
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <Card className="bg-white shadow-md hover:shadow-xl transition-shadow border-dental-teal/10 hover:border-dental-gold/20 h-full">
      <CardHeader>
        <motion.div
          className="bg-dental-teal/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(156, 121, 69, 0.2)", // dental-gold with opacity
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <CardTitle className="font-agbalumo text-dental-teal text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-epilogue text-slate-600">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export function ServicesSection() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <path d="M12 5.5c-7.5 0-7 8-7 8 0 7 6 6 6 6-1-3 1-3 1-3 8.5 0 6-14 0-11z" />
          <path d="M12 5.5c7.5 0 7 8 7 8 0 7-6 6-6 6 1-3-1-3-1-3-8.5 0-6-14 0-11z" />
        </svg>
      ),
      title: "Dental Cleaning",
      description: "We remove bacterial plaque and tartar to keep your teeth healthy and prevent gum disease."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "Teeth Whitening",
      description: "We use advanced techniques to lighten the shade of your teeth, offering long-lasting and natural results."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <path d="M12 3v16" />
          <path d="m14.5 14.5-5-5" />
          <path d="m9.5 14.5 5-5" />
          <path d="M7 21h10" />
        </svg>
      ),
      title: "Orthodontics",
      description: "We correct the alignment of your teeth with different treatment options, from traditional braces to invisible aligners."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <circle cx="12" cy="12" r="10" />
          <path d="m8 12 2 2 6-6" />
        </svg>
      ),
      title: "Dental Implants",
      description: "We restore missing teeth with titanium implants that integrate with the bone for a natural and functional smile."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
          <path d="M9 18a5 5 0 1 0-4-8" />
          <path d="M9 17v-1a3 3 0 0 1 6 0v1" />
          <path d="M9 17h6" />
        </svg>
      ),
      title: "Dental Veneers",
      description: "We design custom porcelain veneers to correct imperfections and achieve the smile you've always wanted."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dental-teal">
          <path d="m5 22 14-4" />
          <path d="M5 2v20" />
          <path d="M19 4v14" />
          <path d="m5 2 14 4" />
        </svg>
      ),
      title: "Pediatric Dentistry",
      description: "We provide specialized care for the little ones in a friendly environment that makes them feel comfortable and safe."
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-dental-teal/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <AnimatedSection direction="up" type="spring" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="font-agbalumo text-4xl text-dental-teal mb-4">Our Services</h2>
            <p className="font-epilogue text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of dental services for the whole family, using the latest technology and innovative techniques.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
