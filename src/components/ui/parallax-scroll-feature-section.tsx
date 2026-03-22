import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionData {
  id: number;
  label: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
}

const ParallaxSectionItem = ({ section }: { section: SectionData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const y = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 px-8 lg:px-14 ${
        section.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <motion.div style={{ y }} className="max-w-sm w-full">
        <p className="text-[10px] uppercase tracking-[0.35em] text-accent/70 mb-5">
          {section.label}
        </p>
        <h3
          className="font-display font-semibold text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem,3.5vw,3rem)" }}
        >
          {section.title}
        </h3>
        <p className="text-white/50 mt-6 text-[15px] leading-[1.85]">
          {section.description}
        </p>
      </motion.div>

      {/* Image — clips in from the side on scroll */}
      <motion.div
        style={{ opacity, clipPath }}
        className="w-full max-w-[340px] lg:max-w-none lg:w-[340px] shrink-0"
      >
        <img
          src={section.imageUrl}
          alt={section.title}
          className="w-full aspect-[3/4] object-cover"
        />
      </motion.div>
    </div>
  );
};

export const ParallaxScrollFeatureSection = ({
  sections,
}: {
  sections: SectionData[];
}) => {
  return (
    <div className="bg-[#13161f] flex flex-col divide-y divide-white/8">
      {sections.map((section) => (
        <ParallaxSectionItem key={section.id} section={section} />
      ))}
    </div>
  );
};
