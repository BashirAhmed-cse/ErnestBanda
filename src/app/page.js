"use client";
import Hero from "@/components/Hero";
import JoinUS from "@/components/JoinUS";
import ElectionCount from "@/components/ElectionCount";
import Support from "@/components/Support";


export default function Home() {

  

  return (
    <main className="pt-20">
      <div className="bg-[#EAEBE6] font-sans">
        {/* Header */}
        

        {/* Hero Section */}
        <section className="py-5 sm:py-10">
          <Hero />
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-5">
          <JoinUS />
        </section>

        {/* Election Countdown */}
        <section className="py-12">
          <ElectionCount />
        </section>

        {/* Support Section */}
        <section className="py-12">
          <Support />
          <div className="max-w-lg mx-auto flex items-center justify-center">
          <p className="text-[#012647] font-semibold text-sm sm:text-lg flex align-middle items-center justify-center mt-5 border border-[#012647] rounded-sm  w-full max-w-fit p-2">Paid for by Ernest Banda for Dallas City Council District 9</p>
          </div>
         
        </section>
        
        {/* Footer */}
       
      </div>
    </main>
  );
}
