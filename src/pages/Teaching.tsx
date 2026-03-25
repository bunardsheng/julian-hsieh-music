import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/ScrollEffects";
import photo1 from "@/assets/Shoot 11.jpeg";
import { ArrowRight } from "lucide-react";

const Teaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar invertOnTop />

      <section className="bg-[#13161f] overflow-hidden">
        <div className="grid lg:grid-cols-12">

          {/* Portrait panel — sticky on desktop */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-0 h-[50vh] lg:h-screen overflow-hidden">
              <img
                src={photo1}
                alt="Julian Hsieh"
                className="w-full h-full object-cover object-[center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13161f]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#13161f]/20" />
            </div>
          </div>

          {/* Philosophy content */}
          <div className="lg:col-span-7 px-8 py-14 lg:px-16 lg:py-24 flex flex-col justify-center lg:min-h-screen">
            <FadeInOnScroll>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent/70 mb-4">Teaching</p>
              <h1 className="font-display text-white font-semibold leading-[1.05] tracking-tight mb-10"
                style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
                Teaching <em className="text-accent not-italic">Philosophy</em>
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.1}>
              <div className="space-y-6 text-white/55 text-[13.5px] leading-[1.85]">
                <p>
                  Every student has their own methods of learning and problem solving. It is the teacher's
                  responsibility to guide each student through their technique and musical discoveries. There
                  are several fundamental violin principles I learned during my time at CMU that I instill in
                  each student.
                </p>
                <p>
                  Standard violin technique philosophies should be taught as guidelines that fit the individual.
                  Each student's learning process, coordination, and anatomy are unique. When instruction is
                  confined to a fixed model and imposed uniformly upon students, it risks failing to address
                  specific challenges a student encounters. I believe it is essential to develop individualized
                  solutions that respond to each student's technical abilities and musical goals. This approach
                  helps prevent the accumulation of inefficient habits that can lead to chronic pain or injury.
                  More importantly, it creates space for students to experiment with their sound and phrasing so
                  they begin to form their own musical preferences and intuition. I strive to improve a student's
                  ability to evaluate their own playing so that they are capable of identifying technical issues
                  independently and practice with purpose.
                </p>
                <p>
                  In order to maximize progress while practicing, students must not neglect their individual
                  musical ideas when building a strong technical foundation. All physical aspects of playing
                  should be in service of a musical idea. Younger students have a tendency to practice
                  mindlessly. They develop poor practice habits and put their musical development on pause. By
                  unifying the two, students build reliable physical habits while developing their artistry from
                  the beginning.
                </p>
                <p>
                  There are broader psychological challenges that students may face. I have met many talented
                  violinists who never experienced joy while playing or gradually burnt out and quit. The
                  cumulative stress from auditions, performances, comparison, or perceived plateaus in growth
                  can have adverse effects on mental health and playing ability. I believe this begins in the
                  practice room, when students begin to stagnate in their routines. Loss of inspiration and
                  motivation can quickly follow. I hope to help students maintain their curiosity and build
                  resilience, especially while learning new repertoire. When I'm looking for new ways to improve
                  my technique or sound, I listen to masterclasses or different performances and try to improve
                  one specific aspect of my playing at a time. This approach makes me think critically about my
                  own playing and provides examples of how I can practice differently. I also encourage students
                  to utilize the 1% improvement philosophy that is often used by professional athletes. While it
                  is obviously difficult to quantify musical improvement, students will see the compounded
                  effects if they attempt to improve by just 1% every practice session.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="mt-12">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white text-sm tracking-wide overflow-hidden hover:border-accent transition-colors duration-500 cursor-pointer"
                >
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <span className="relative z-10 group-hover:text-[#0d0e12] transition-colors duration-200">Schedule a Trial Lesson</span>
                  <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#0d0e12] transition-all duration-300" />
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teaching;
