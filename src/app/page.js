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
        <section className="py-12">
          <Hero />
        </section>

        {/* Join Us Section */}
        <section id="join-us" className="py-12">
          <JoinUS />
        </section>

        {/* Election Countdown */}
        <section className="py-12">
          <ElectionCount />
        </section>

        {/* Support Section */}
        <section className="py-12">
          <Support />
        </section>

        {/* Footer */}
       
      </div>
    </main>
  );
}
