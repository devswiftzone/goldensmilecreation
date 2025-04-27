"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection, FadeInWhenVisible } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

// Loading spinner component
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Helper component to show Resend setup instructions
const ResendInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <motion.div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
      <div className="flex justify-between items-center">
        <p className="text-blue-700 font-epilogue font-medium">Resend Email Configuration Required</p>
        <Button
          variant="ghost"
          className="text-blue-700 p-1 h-auto"
          onClick={() => setShowInstructions(!showInstructions)}
        >
          {showInstructions ? "Hide Details" : "Show Setup Instructions"}
        </Button>
      </div>

      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-2 text-sm text-blue-700"
        >
          <p className="mb-2">To make this contact form work with Resend:</p>
          <ol className="list-decimal ml-5 mb-3 space-y-1">
            <li>
              Create an account at{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Resend.com
              </a>
            </li>
            <li>Generate an API key from the Resend dashboard</li>
            <li>
              Update these environment variables in your <b>.env.local</b> file:
            </li>
          </ol>
          <pre className="bg-blue-100 p-2 rounded text-xs overflow-x-auto">
            {`RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL=email_to_receive_notifications`}
          </pre>
          <p className="mt-2">For security, always use environment variables for production.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form validation
  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim() === "") {
      errors.name = "Name is required";
    }

    if (!email || email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!message || message.trim() === "") {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormStatus("loading");

    try {
      // Convert FormData to a plain object
      const formValues = Object.fromEntries(formData.entries());

      // Send data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success!
      setFormStatus("success");
      if (formRef.current) {
        formRef.current.reset();
      }

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);

    } catch (error) {
      console.error('Error sending form:', error);
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');

      // Reset error status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setErrorMessage("");
      }, 3000);
    }
  };

  // Staggered animation for form fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <AnimatedSection direction="up" type="spring" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="font-agbalumo text-4xl text-dental-teal mb-4">Contact Us</h2>
            <p className="font-epilogue text-slate-600 max-w-2xl mx-auto">
              We're here to answer your questions. Get in touch with us and we'll respond as soon as possible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeInWhenVisible delay={0.3} duration={0.8}>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md border border-dental-teal/10"
              whileHover={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 73, 82, 0.1), 0 8px 10px -6px rgba(0, 73, 82, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-agbalumo text-2xl text-dental-teal mb-6">Send us a message</h3>

              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label htmlFor="name" className="font-epilogue text-slate-700 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className={`border-dental-teal/20 focus:border-dental-gold/50 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <label htmlFor="email" className="font-epilogue text-slate-700 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      className={`border-dental-teal/20 focus:border-dental-gold/50 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="phone" className="font-epilogue text-slate-700 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="border-dental-teal/20 focus:border-dental-gold/50"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="service" className="font-epilogue text-slate-700 block">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-dental-teal/20 rounded-md font-epilogue focus:outline-none focus:ring-2 focus:ring-dental-gold/30 focus:border-dental-gold/50"
                  >
                    <option value="">Select a service</option>
                    <option value="cleaning">Dental Cleaning</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="implants">Dental Implants</option>
                    <option value="veneers">Dental Veneers</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="message" className="font-epilogue text-slate-700 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className={`min-h-[120px] border-dental-teal/20 focus:border-dental-gold/50 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </motion.div>

                {/* Show the Resend setup instructions in development */}
                {/* {process.env.NODE_ENV === 'development' && <ResendInstructions />} */}

                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-dental-teal hover:bg-dental-teal/90 text-white font-epilogue"
                      disabled={formStatus === "loading"}
                    >
                      {formStatus === "loading" ? (
                        <span className="flex items-center justify-center">
                          <LoadingSpinner />
                          Sending...
                        </span>
                      ) : formStatus === "success" ? (
                        <span className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Message Sent!
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </motion.div>

                {formStatus === "success" && (
                  <motion.p
                    className="text-green-600 font-epilogue text-center mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Thank you for contacting us. We will get back to you soon.
                  </motion.p>
                )}

                {formStatus === "error" && (
                  <motion.p
                    className="text-red-500 font-epilogue text-center mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {errorMessage || "There was an error sending your message. Please try again."}
                  </motion.p>
                )}
              </motion.form>
            </motion.div>
          </FadeInWhenVisible>

          {/* Contact information */}
          <div className="space-y-8">
            <FadeInWhenVisible delay={0.5} duration={0.8}>
              <motion.div
                className="bg-dental-teal/5 p-8 rounded-lg border border-dental-teal/10"
                whileHover={{
                  boxShadow:
                    "0 10px 25px -5px rgba(156, 121, 69, 0.1), 0 8px 10px -6px rgba(156, 121, 69, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-agbalumo text-2xl text-dental-teal mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-dental-teal"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      title: "Address",
                      content: (
                        <>
                          123 Main St, Dental City
                          <br />
                          Between Smile St & Health Ave
                        </>
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-dental-teal"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                      title: "Phone",
                      content: (
                        <>
                          +1 (555) 123-4567
                          <br />
                          +1 (555) 987-6543
                        </>
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-dental-teal"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                      title: "Email",
                      content: (
                        <>
                          info@goldensmilecreation.com
                          <br />
                          appointments@goldensmilecreation.com
                        </>
                      ),
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-dental-teal"
                        >
                          <path d="M12 8v4l3 3" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      ),
                      title: "Office Hours",
                      content: (
                        <>
                          Monday to Friday: 8:00 AM - 7:00 PM
                          <br />
                          Saturday: 8:00 AM - 2:00 PM
                        </>
                      ),
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="bg-dental-teal/10 p-2 rounded-full mr-4 mt-1"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(156, 121, 69, 0.2)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-epilogue font-semibold text-lg text-dental-teal">
                          {item.title}
                        </h4>
                        <p className="font-epilogue text-slate-600">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeInWhenVisible>

            {/* Map */}
            <FadeInWhenVisible delay={0.7} duration={0.8}>
              <motion.div
                className="aspect-video bg-dental-teal/10 rounded-lg flex items-center justify-center"
                whileHover={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 73, 82, 0.1), 0 8px 10px -6px rgba(0, 73, 82, 0.1)",
                  backgroundColor: "rgba(0, 73, 82, 0.07)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-8">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-dental-teal mx-auto mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </motion.svg>
                  <motion.p
                    className="font-epilogue text-dental-teal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Location map (an interactive map would be integrated here)
                  </motion.p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
