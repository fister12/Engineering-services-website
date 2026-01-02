"use client";

import { useEffect, useRef, useState } from "react";

// Animated counter hook
function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);

  return count;
}

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Expert Professionals" },
];

const skills = [
  { name: "Heavy Fabrication", icon: "⚙️" },
  { name: "Marine Engineering", icon: "🚢" },
  { name: "Equipment Rental", icon: "🏗️" },
  { name: "Industrial Solutions", icon: "🏭" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="about-heading"
            className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            About <span className="text-gradient">Us</span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
          />
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Description */}
          <article
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              We are a <strong className="text-yellow-500">leading engineering company</strong> in Kerala,
              specializing in heavy structural fabrication, marine services, and comprehensive industrial
              engineering solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              From custom steel tanks for treatment plants to tugboats and barges, we deliver
              end-to-end solutions with unwavering commitment to safety, efficiency, and quality
              standards. Our experienced team ensures every project exceeds expectations.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold group"
              title="Contact us for more information"
            >
              Learn more about our capabilities
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </article>

          {/* Right Column - Mission & Vision Cards */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <article className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To provide innovative, reliable engineering solutions that build the foundation
                    for industrial progress and support seamless marine operations across the region.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the most trusted name in heavy fabrication and marine engineering,
                    leading the industry through sustainable practices and engineering excellence.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-500/10 dark:to-yellow-500/5 p-8 rounded-2xl border border-yellow-200 dark:border-yellow-500/20 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Assured</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    All our projects adhere to international safety standards and quality certifications,
                    ensuring you receive nothing but the best.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="text-center p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift"
      style={{ transitionDelay: `${700 + index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
