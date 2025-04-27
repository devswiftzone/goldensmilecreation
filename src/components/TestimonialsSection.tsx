"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, FadeInWhenVisible } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <motion.div
    whileHover={{ y: -7 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="bg-white border-dental-teal/10 shadow-md hover:shadow-xl transition-shadow h-full">
      <CardContent className="pt-6">
        <div className="mb-4">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="30"
            viewBox="0 0 42 30"
            fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.path
              d="M11.6893 0.85C6.08932 4.49 2.01932 10.24 0.929316 17.17C0.809316 18.25 0.749316 19.09 0.749316 19.99C0.749316 25.92 4.43932 29.68 9.52932 29.68C14.5593 29.68 18.1893 26.16 18.1893 21.37C18.1893 16.7 14.9193 13.66 10.3093 13.66C9.64932 13.66 8.98932 13.72 8.26932 13.9C9.04932 10.12 13.1793 5.99 16.9593 4.13L11.6893 0.85ZM34.0693 0.85C28.4693 4.49 24.3993 10.24 23.3093 17.17C23.1893 18.25 23.1293 19.09 23.1293 19.99C23.1293 25.92 26.8193 29.68 31.9093 29.68C36.9393 29.68 40.5693 26.16 40.5693 21.37C40.5693 16.7 37.2993 13.66 32.6893 13.66C32.0293 13.66 31.3693 13.72 30.6493 13.9C31.4293 10.12 35.5593 5.99 39.3393 4.13L34.0693 0.85Z"
              fill="#9C7945"
              fillOpacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.svg>
        </div>
        <motion.p
          className="font-epilogue text-slate-700 mb-6 text-lg italic"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "{quote}"
        </motion.p>
        <div className="flex items-center">
          <motion.div
            className="w-10 h-10 bg-dental-teal/20 rounded-full mr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4
            }}
          />
          <div>
            <motion.p
              className="font-epilogue font-semibold text-dental-teal"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {name}
            </motion.p>
            <motion.p
              className="font-epilogue text-sm text-slate-500"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {role}
            </motion.p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Thanks to Golden Smile Creation I regained my confidence. Their team is professional and the service is top-notch.",
      name: "Maria Rodriguez",
      role: "Orthodontics Patient"
    },
    {
      quote: "Amazing care and results. The teeth whitening exceeded all my expectations. My smile looks spectacular!",
      name: "Carlos Hernandez",
      role: "Dental Aesthetics Patient"
    },
    {
      quote: "My experience with dental implants was excellent. Dr. Mendoza is a true professional and the result is natural.",
      name: "Laura Martinez",
      role: "Implant Patient"
    },
    {
      quote: "I take my children to Golden Smile Creation and they're always happy to go to the dentist. The team knows how to treat children.",
      name: "Pedro Sanchez",
      role: "Pediatric Dentistry Patient"
    },
    {
      quote: "The dental veneers completely changed my smile. The work they did is impeccable and very natural.",
      name: "Ana Gonzalez",
      role: "Veneers Patient"
    }
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <AnimatedSection direction="up" type="spring" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="font-agbalumo text-4xl text-dental-teal mb-4">What Our Patients Say</h2>
            <p className="font-epilogue text-slate-600 max-w-2xl mx-auto">
              We take pride in providing the best dental service, and here are some experiences from our satisfied patients.
            </p>
          </div>
        </AnimatedSection>

        <FadeInWhenVisible delay={0.3} duration={0.8}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Testimonial
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselPrevious className="relative mr-2 bg-dental-teal hover:bg-dental-teal/90 text-white" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselNext className="relative ml-2 bg-dental-teal hover:bg-dental-teal/90 text-white" />
              </motion.div>
            </motion.div>
          </Carousel>
        </FadeInWhenVisible>
      </div>
    </motion.section>
  );
}
