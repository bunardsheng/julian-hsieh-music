import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/teaching") {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] bg-[#13161f] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-white font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)" }}
          >
            Julian Hsieh
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 h-[1.5px] w-8 bg-accent origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
