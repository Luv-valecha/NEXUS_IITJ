import { motion, useReducedMotion } from "framer-motion";
import { coordinators, coreTeam } from "../data/team";
import TeamCard from "../components/Team/TeamCard";

const container = {
  hidden: { opacity: 0 },
  visible: (reduced) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduced ? 0 : 0.12,
      delayChildren: reduced ? 0 : 0.15,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: (reduced) => ({
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0.2 }
      : { type: "spring", stiffness: 60, damping: 14 },
  }),
};

const Team = () => {
  const reduced = useReducedMotion();

  return (
    <motion.section
      className="
        min-h-screen px-6 py-20 text-white max-w-6xl mx-auto
      "
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={reduced}
    >
      {/* Title */}
      <motion.h1
        variants={item}
        custom={reduced}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14"
      >
        Meet Our Team
      </motion.h1>

      {/* Coordinators */}
      <motion.div
        variants={container}
        custom={reduced}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {coordinators.map((member) => (
          <motion.div key={member.id} variants={item} custom={reduced}>
            <TeamCard member={member} />
          </motion.div>
        ))}
      </motion.div>

      {/* Core Team */}
      <motion.h2
        variants={item}
        custom={reduced}
        className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10"
      >
        Core Team
      </motion.h2>

      <motion.div
        variants={container}
        custom={reduced}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {coreTeam.map((name, index) => (
          <motion.div
            key={index}
            variants={item}
            custom={reduced}
            whileHover={
              reduced
                ? {}
                : {
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34,211,238,0.6)",
                  }
            }
            className="
              rounded-xl px-4 py-3 text-center
              bg-gradient-to-r from-blue-700 to-cyan-400
              font-semibold
            "
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Team;
