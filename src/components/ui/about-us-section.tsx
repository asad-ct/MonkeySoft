import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Award,
  Users,
  Calendar,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, type Variants } from "framer-motion"
import CelestialBloomShader from "./celestial-bloom-shader"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const services = [
    {
      number: 1,
      title: "Requirement Gathering",
      description:
        "We start by understanding your business goals and requirements. Our team collaborates with stakeholders to define project scope, objectives, and success criteria, ensuring alignment from day one.",
      position: "left",
    },
    {
      number: 2,
      title: "Design & UX",
      description:
        "We create intuitive and visually compelling designs that prioritize user experience. Our design process includes wireframes, prototypes, and user testing to deliver interfaces that users love.",
      position: "left",
    },
    {
      number: 3,
      title: "Architecture",
      description:
        "We design robust and scalable system architecture that supports your application's growth. Our architects plan database structures, APIs, and infrastructure to ensure performance and reliability.",
      position: "left",
    },
    {
      number: 4,
      title: "Development",
      description:
        "Our experienced developers write clean, maintainable code using industry best practices. We follow agile methodologies, maintaining regular communication and delivering features iteratively.",
      position: "right",
    },
    {
      number: 5,
      title: "Testing & QA",
      description:
        "Comprehensive testing ensures your software is bug-free and performs optimally. We conduct unit tests, integration tests, performance testing, and user acceptance testing for quality assurance.",
      position: "right",
    },
    {
      number: 6,
      title: "Deployment",
      description:
        "We deploy your application smoothly to production with zero downtime. Our team provides ongoing support, monitoring, and maintenance to ensure your software runs flawlessly.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 30, label: "Projects Delivered", suffix: "+" },
    { icon: <Users />, value: 45, label: "Total Clients", suffix: "+" },
    { icon: <Calendar />, value: 12, label: "Years in Development", suffix: "" },
    { icon: <TrendingUp />, value: 99, label: "Client Satisfaction", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-black text-[#ededed] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F63715]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#FF9663]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#F63715]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#FF9663]/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <div className="absolute top-5 right-5 w-96 h-96 opacity-80">
        <CelestialBloomShader />
      </div>

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-[#ededed]">How We Build</h2>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-[#ededed]/60" variants={itemVariants}>
          We follow a structured software development process that ensures quality, reliability, and timely delivery.
          From initial planning to post-launch support, every step is designed with your success in mind.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Left - Image */}
          <div className="md:w-1/4 flex justify-start items-start">
            <motion.div className="relative w-full" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern House"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                </motion.div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#F63715]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#FF9663]/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F63715]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF9663]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right - 3x2 grid of cards */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
                variants={itemVariants}
                delay={index * 0.1}
                direction="left"
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-[#0d0d0d] border border-white/10 text-[#ededed] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[rgba(0,0,0,0.4)_16px_24px_20px_8px,inset_0_2px_rgba(184,180,180,0.08)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2 text-[#ededed]">Ready to start your next project?</h3>
            <p className="text-[#ededed]/60">Let&apos;s build something amazing together with our proven development process.</p>
          </div>
          <motion.a
            href="#contact"
            className="bg-[#F63715] hover:bg-[#F63715]/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  number: number
  title: string
  description: string
  variants: Variants
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ number, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="relative flex flex-col group rounded-xl p-6 bg-[#111111] border border-white/8 hover:border-white/20 transition-all duration-300"
      style={{
        boxShadow: "0 4px 6px rgba(0,0,0,0.4), 0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
      }}
      variants={variants}
      transition={{ delay }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
    >
      {/* Top highlight line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#1a1a1a] border border-white/15 text-white font-bold text-base flex-shrink-0"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
        >
          <span className="text-gray-200">{String(number).padStart(2, '0')}</span>
        </div>
        <h3 className="text-base font-semibold text-white leading-tight tracking-wide">
          {title}
        </h3>
      </motion.div>

      <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-4" />

      <motion.p
        className="text-sm text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl flex flex-col items-center text-center group hover:border-white/20 transition-colors duration-300 shadow-[rgba(0,0,0,0.4)_16px_24px_20px_8px,inset_0_2px_rgba(184,180,180,0.08)]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-gray-300 group-hover:bg-white/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#ededed] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#ededed]/60 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#F63715] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}
