import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import shoot19 from "@/assets/Shoot 19 Edited.jpg";
import shoot9 from "@/assets/Shoot 9 Edit.jpg";

// Critical images to preload per route before revealing content
const PAGE_IMAGES: Record<string, string[]> = {
  "/": [shoot19],
  "/about": [shoot9],
  "/contact": [shoot9],
};

function preloadImages(srcs: string[]): Promise<void> {
  if (!srcs.length) return Promise.resolve();
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // never block on error
          img.src = src;
        })
    )
  ).then(() => undefined);
}

const MIN_MS = 300;

const PageLoader = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setVisible(true);
    setProgress(0);

    // Animate progress bar to 60% quickly to show activity
    const t1 = setTimeout(() => !cancelled && setProgress(60), 80);

    const images = PAGE_IMAGES[location.pathname] ?? [];
    const start = Date.now();

    preloadImages(images).then(() => {
      if (cancelled) return;
      const remaining = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => {
        if (cancelled) return;
        setProgress(100);
        // Short pause at 100% before fading out
        setTimeout(() => !cancelled && setVisible(false), 150);
      }, remaining);
    });

    return () => {
      cancelled = true;
      clearTimeout(t1);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={location.pathname + "-loader"}
          className="fixed inset-0 z-[200] bg-[#13161f] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Accent progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-accent origin-left"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
