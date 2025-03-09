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
      className="py-12"
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
        <Section>
          <JoinUS />
        </Section>

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
          <div className="max-w-lg mx-auto flex items-center justify-center">
            <p className="text-[#012647] font-semibold text-sm sm:text-lg flex align-middle items-center justify-center mt-5 border border-[#012647] rounded-sm w-full max-w-fit p-2">
              Paid for by Ernest Banda for Dallas City Council District 9
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
