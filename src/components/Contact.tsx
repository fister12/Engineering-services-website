"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFieldActive = (fieldName: string) => {
    return focusedField === fieldName || formState[fieldName as keyof typeof formState] !== "";
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
          />
          <p
            className={`text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Ready to start your next project? Let&apos;s discuss how we can help.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <article
            className={`bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>
            <form className="space-y-6" action="#" method="POST">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 focus:border-yellow-500 focus:outline-none text-base bg-transparent text-gray-900 dark:text-white transition-colors"
                  required
                  aria-label="Your name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldActive("name")
                      ? "top-2 text-xs text-yellow-500 font-medium"
                      : "top-4 text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 focus:border-yellow-500 focus:outline-none text-base bg-transparent text-gray-900 dark:text-white transition-colors"
                  required
                  aria-label="Email address"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldActive("email")
                      ? "top-2 text-xs text-yellow-500 font-medium"
                      : "top-4 text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Email Address
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 focus:border-yellow-500 focus:outline-none text-base bg-transparent text-gray-900 dark:text-white transition-colors"
                  required
                  aria-label="Phone number"
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldActive("phone")
                      ? "top-2 text-xs text-yellow-500 font-medium"
                      : "top-4 text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Phone Number
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 focus:border-yellow-500 focus:outline-none text-base bg-transparent resize-none text-gray-900 dark:text-white transition-colors"
                  rows={4}
                  required
                  aria-label="Your message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldActive("message")
                      ? "top-2 text-xs text-yellow-500 font-medium"
                      : "top-4 text-gray-500 dark:text-gray-400"
                    }`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 px-8 text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </article>

          {/* Contact Info Cards */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            {/* Address Card */}
            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Location</h3>
                  <address className="text-gray-600 dark:text-gray-400 not-italic leading-relaxed">
                    Kottapuram Rd, Aroor gram panchayat<br />
                    Kochi, Kerala 688534, India
                  </address>
                </div>
              </div>
            </article>

            {/* Contact Card */}
            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact Details</h3>
                  <div className="space-y-2">
                    <a href="tel:+919971281622" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors">
                      <span>+91 9971281622</span>
                    </a>
                    <a href="mailto:info@lmdinternational.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors">
                      <span>info@lmdinternational.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Business Hours Card */}
            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p>Monday - Saturday: <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM</span></p>
                    <p>Sunday: <span className="text-gray-500">Closed</span></p>
                    <p className="text-sm text-yellow-500 font-medium mt-2">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Map Card */}
            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Find Us
              </h3>
              <iframe
                title="Punakkattuthara Engineering Location on Google Maps"
                src="https://maps.google.com/maps?q=Kottapuram+Rd,+Aroor+gram+panchayat,+Kochi,+Kerala+688534&output=embed"
                width="100%"
                height="200"
                className="rounded-xl border border-gray-200 dark:border-gray-600"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
