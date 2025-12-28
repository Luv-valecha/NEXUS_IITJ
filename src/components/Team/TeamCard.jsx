import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const TeamCard = ({ member }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    if (reduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        x: reduced ? 0 : springX,
        y: reduced ? 0 : springY,
      }}
      whileHover={
        reduced
          ? {}
          : {
              scale: 1.04,
              boxShadow: "0 0 10px rgba(34,211,238,0.35)",
            }
      }
      className="
        rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur-lg
        border border-white/10
        transition-colors
      "
    >
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-1">
        {member.name}
      </h3>

      <p className="text-gray-300 text-sm">
        {member.role}
      </p>
    </div>
    </motion.div>
  );
};

export default TeamCard;
