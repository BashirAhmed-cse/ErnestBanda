"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import JoinUS from "@/components/JoinUS";
import ElectionCount from "@/components/ElectionCount";
import Support from "@/components/Support";
import EarlyVotingCount from "@/components/EarlyVotingCount";

const Section = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-4"
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <main className="pt-20">
      <div className="bg-[#EAEBE6] font-sans">
        {/* Hero Section */}
        <section className="py-5 sm:py-10">
          <Hero />
        </section>

        {/* Join Us Section */}
        <>
          <JoinUS />
        </>

        {/* Election Countdown */}
        <Section>
          <ElectionCount />
        </Section>

        {/* Early Voting Countdown */}
        <Section>
          <EarlyVotingCount />
        </Section>

        {/* Support Section */}
        <Section>
          <Support />
         
        </Section>
      </div>
    </main>
  );
}
