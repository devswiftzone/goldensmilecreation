"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FadeInWhenVisible, ScaleInWhenVisible } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

// Temporary logo until we have the real image
const ToothLogo = () => (
  <motion.div
    className="flex items-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 mr-2 text-white"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.path
        d="M12 5.5c-7.5 0-7 8-7 8 0 7 6 6 6 6-1-3 1-3 1-3 8.5 0 6-14 0-11z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M12 5.5c7.5 0 7 8 7 8 0 7-6 6-6 6 1-3-1-3-1-3-8.5 0-6-14 0-11z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.svg>
    <div>
      <motion.span
        className="font-agbalumo text-white text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Golden Smile
      </motion.span>
      <motion.span
        className="font-agbalumo text-dental-gold text-xl ml-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        Creation
      </motion.span>
    </div>
  </motion.div>
);

// Social media icons
const SocialIcon = ({ href, children, label, delay }: { href: string; children: React.ReactNode; label: string; delay: number }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
    aria-label={label}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const contactItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 mt-1 text-dental-gold"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      text: "123 Main St, Dental City"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 mt-1 text-dental-gold"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: "+1 (555) 123-4567"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 mt-1 text-dental-gold"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      text: "info@goldensmilecreation.com"
    }
  ];

  const socialIcons = [
    {
      href: "https://facebook.com",
      label: "Facebook",
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
          className="text-white"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
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
          className="text-white"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
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
          className="text-white"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      href: "https://youtube.com",
      label: "YouTube",
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
          className="text-white"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    }
  ];

  return (
    <motion.footer
      className="bg-dental-teal text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <FadeInWhenVisible delay={0.2} duration={0.8} className="md:col-span-2">
            <ToothLogo />
            <motion.p
              className="font-epilogue mt-4 text-white/80 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              At Golden Smile Creation, we are dedicated to creating perfect smiles with the highest standards of quality and advanced dental technology.
            </motion.p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  delay={1.5 + (index * 0.1)}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </FadeInWhenVisible>

          {/* Quick Links */}
          <FadeInWhenVisible delay={0.4} duration={0.8}>
            <h3 className="font-agbalumo text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-epilogue">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="text-white/80 hover:text-dental-gold transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </FadeInWhenVisible>

          {/* Contact */}
          <FadeInWhenVisible delay={0.6} duration={0.8}>
            <h3 className="font-agbalumo text-xl mb-4">Contact</h3>
            <ul className="space-y-2 font-epilogue">
              {contactItems.map((item, index) => (
                <motion.li
                  key={`contact-${item.text}`}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                  <span className="text-white/80">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="mt-6 bg-dental-gold hover:bg-dental-gold/90 text-dental-teal font-epilogue">
                Book Appointment
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Separator className="my-8 bg-white/20" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="font-epilogue text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Golden Smile Creation. All rights reserved.
          </motion.p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/terms" className="font-epilogue text-white/60 text-sm hover:text-dental-gold transition-colors">
                Terms & Conditions
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="font-epilogue text-white/60 text-sm hover:text-dental-gold transition-colors">
                Privacy Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
